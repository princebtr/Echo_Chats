import React from "react";
import { FaComments, FaLock, FaRocket, FaUserFriends } from "react-icons/fa";

const LandingPage = () => {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-red-500 to-gray-500 py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold text-white mb-4">
            Welcome to <span className="text-gray-800">Echos</span>
          </h1>
          <p className="text-xl text-gray-100 mb-8">
            Connect, chat, and collaborate with people around the world. Fast,
            secure, and easy to use.
          </p>
          <div className="space-x-4">
            <a
              href="/login"
              className="bg-white text-gray-800 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
            >
              Get Started
            </a>
            <a
              href="/about"
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-800 transition-colors duration-200"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Why Choose Echos?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Feature 1 */}
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="flex justify-center">
              <FaComments className="text-4xl text-red-500 mb-4" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Real-Time Chat
            </h3>
            <p className="text-gray-600">
              Chat with friends and colleagues in real-time with no delays.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="flex justify-center">
              <FaLock className="text-4xl text-red-500 mb-4" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              End-to-End Encryption
            </h3>
            <p className="text-gray-600">
              Your messages are secure and private with advanced encryption.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="flex justify-center">
              <FaRocket className="text-4xl text-red-500 mb-4" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Fast & Reliable
            </h3>
            <p className="text-gray-600">
              Enjoy lightning-fast messaging with 99.9% uptime.
            </p>
          </div>

          {/* Feature 4 */}
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="flex justify-center">
              <FaUserFriends className="text-4xl text-red-500 mb-4" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Group Chats
            </h3>
            <p className="text-gray-600">
              Create groups and chat with multiple people at once.
            </p>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="bg-gray-100 py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            What Our Users Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-600 mb-4">
                "Echos has completely changed the way I communicate. It's fast,
                secure, and super easy to use!"
              </p>
              <div className="flex items-center">
                <img
                  src="https://th.bing.com/th/id/OIP.tLIHaw7j0a6Zfbva1Lt7UAHaHa?w=512&h=512&rs=1&pid=ImgDetMain"
                  alt="User"
                  className="w-10 h-10 rounded-full mr-4"
                />
                <div>
                  <h4 className="font-semibold text-gray-800">John Doe</h4>
                  <p className="text-sm text-gray-600">Software Engineer</p>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-600 mb-4">
                "I love the group chat feature. It's perfect for staying
                connected with my team."
              </p>
              <div className="flex items-center">
                <img
                  src="https://th.bing.com/th/id/OIP.Rg2FmvXuSaiA7GHVqvuY0QHaFj?rs=1&pid=ImgDetMain"
                  alt="User"
                  className="w-10 h-10 rounded-full mr-4"
                />
                <div>
                  <h4 className="font-semibold text-gray-800">Jane Smith</h4>
                  <p className="text-sm text-gray-600">Project Manager</p>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-600 mb-4">
                "The end-to-end encryption gives me peace of mind knowing my
                conversations are private."
              </p>
              <div className="flex items-center">
                <img
                  src="https://png.pngtree.com/png-vector/20240312/ourmid/pngtree-avatar-cartoon-in-flat-style-png-image_11929222.png"
                  alt="User"
                  className="w-10 h-10 rounded-full mr-4"
                />
                <div>
                  <h4 className="font-semibold text-gray-800">Alice Johnson</h4>
                  <p className="text-sm text-gray-600">Freelancer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call-to-Action Section */}
      <div className="bg-gradient-to-r from-red-500 to-gray-500 py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-100 mb-8">
            Join thousands of users who are already enjoying Echos. Sign up
            today!
          </p>
          <a
            href="/register"
            className="bg-white text-gray-800 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
          >
            Register Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
