import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Loader from "../assets/loader.gif";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { setAvatarRoute } from "../utils/APIRoutes";

export default function SetAvatar() {
  const toastOptions = {
    position: "bottom-right",
    autoClose: 8000,
    pauseOnHover: true,
    draggable: true,
  };

  const api = "https://api.multiavatar.com";
  const navigate = useNavigate();
  const [avatars, setAvatars] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedAvatar, setSelectedAvatar] = useState(undefined);
  const [username, setUserName] = useState("");

  useEffect(() => {
    if (!localStorage.getItem("chat-app-user")) {
      navigate("/login");
    }
  }, [navigate]);

  useEffect(() => {
    const storedUser = localStorage.getItem("chat-app-user");
    if (storedUser) {
      const user = JSON.parse(storedUser);
      setUserName(user.username);
    }

    const fetchAvatars = async () => {
      try {
        const data = [];
        for (let i = 0; i < 4; i++) {
          const image = await axios.get(`${api}/${Math.random() * 1000}`, {
            responseType: "arraybuffer",
          });
          const base64 = btoa(
            new Uint8Array(image.data).reduce(
              (data, byte) => data + String.fromCharCode(byte),
              ""
            )
          );
          data.push(base64);
        }
        setAvatars(data);
        setIsLoading(false);
      } catch (error) {
        toast.error("Error loading avatars!!", toastOptions);
      }
    };

    fetchAvatars();
  }, []);

  const handleSetProfilePicture = async () => {
    if (selectedAvatar === undefined) {
      toast.error("Please select an avatar", toastOptions);
      return;
    }
    const storedUser = JSON.parse(localStorage.getItem("chat-app-user"));
    try {
      const { data } = await axios.post(`${setAvatarRoute}/${storedUser._id}`, {
        image: avatars[selectedAvatar],
      });
      if (data.isSet) {
        storedUser.isAvatarImageSet = true;
        storedUser.avatarImage = data.image;
        localStorage.setItem("chat-app-user", JSON.stringify(storedUser));
        navigate("/chat");
      } else {
        toast.error(
          "Can't set Avatar right now!! Please try again.",
          toastOptions
        );
      }
    } catch (error) {
      toast.error("Error setting avatar!! Please try again.", toastOptions);
    }
  };

  return (
    <>
      <ToastContainer />
      {isLoading ? (
        <div className="flex items-center justify-center h-screen w-full bg-gray-100">
          <img src={Loader} alt="Loading..." className="w-50 h-50" />
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
          <h1 className="text-2xl font-bold text-gray-600 mb-6">
            Hey {username ? username : "there"} 👋
          </h1>
          <h1 className="text-2xl font-semibold text-gray-800 mb-6">
            Pick an Avatar as your profile picture
          </h1>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {avatars.map((avatar, index) => (
              <div
                key={index}
                className={`cursor-pointer border-4 p-2 rounded-full transition-all duration-300 ${
                  selectedAvatar === index
                    ? "border-red-500 scale-110"
                    : "border-transparent"
                }`}
                onClick={() => setSelectedAvatar(index)}
              >
                <img
                  src={`data:image/svg+xml;base64,${avatar}`}
                  alt="avatar"
                  className="w-24 h-24 rounded-full"
                />
              </div>
            ))}
          </div>
          <button
            onClick={handleSetProfilePicture}
            className="mt-6 px-6 py-2 bg-gradient-to-r from-red-500 to-gray-500 text-white font-semibold rounded-lg hover:from-gray-600 hover:to-red-600 transition-all duration-300"
          >
            Set as Profile Picture
          </button>
        </div>
      )}
    </>
  );
}
