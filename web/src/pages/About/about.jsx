import React from "react";
import { FaUsers, FaLightbulb, FaHandshake } from "react-icons/fa";

const AboutPage = () => {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-red-500 to-gray-500 py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold text-white mb-4">
            About <span className="text-gray-800">Echos</span>
          </h1>
          <p className="text-xl text-gray-100 mb-8">
            Discover the story behind Echos and our mission to connect the
            world.
          </p>
        </div>
      </div>

      {/* Mission Section */}
      <div className="container mx-auto px-6 py-16">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Mission</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            At Echos, our mission is to provide a fast, secure, and
            user-friendly platform for people to connect and communicate. We
            believe in the power of real-time communication to bring people
            closer, no matter where they are.
          </p>
        </div>
      </div>

      {/* Values Section */}
      <div className="bg-gray-100 py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Value 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="flex justify-center">
                <FaUsers className="text-4xl text-red-500 mb-4" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                User-Centric
              </h3>
              <p className="text-gray-600">
                We prioritize our users' needs and strive to deliver the best
                experience.
              </p>
            </div>

            {/* Value 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="flex justify-center">
                <FaLightbulb className="text-4xl text-red-500 mb-4" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Innovation
              </h3>
              <p className="text-gray-600">
                We constantly innovate to stay ahead in the world of
                communication.
              </p>
            </div>

            {/* Value 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="flex justify-center">
                <FaHandshake className="text-4xl text-red-500 mb-4" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Trust & Security
              </h3>
              <p className="text-gray-600">
                Your privacy and security are our top priorities.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="container mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Meet Our Team
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Team Member 1 */}
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <img
              src="https://th.bing.com/th/id/OIP.Rg2FmvXuSaiA7GHVqvuY0QHaFj?rs=1&pid=ImgDetMain"
              alt="Team Member"
              className="w-32 h-32 rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              John Doe
            </h3>
            <p className="text-gray-600">CEO & Founder</p>
          </div>

          {/* Team Member 2 */}
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <img
              src="https://png.pngtree.com/png-vector/20240312/ourmid/pngtree-avatar-cartoon-in-flat-style-png-image_11929222.png"
              alt="Team Member"
              className="w-32 h-32 rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Jane Smith
            </h3>
            <p className="text-gray-600">CTO</p>
          </div>

          {/* Team Member 3 */}
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <img
              src="https://th.bing.com/th/id/OIP.tLIHaw7j0a6Zfbva1Lt7UAHaHa?w=512&h=512&rs=1&pid=ImgDetMain"
              alt="Team Member"
              className="w-32 h-32 rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Alice Johnson
            </h3>
            <p className="text-gray-600">Lead Designer</p>
          </div>
        </div>
      </div>

      {/* Call-to-Action Section */}
      <div className="bg-gradient-to-r from-red-500 to-gray-500 py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to Join Echos?
          </h2>
          <p className="text-xl text-gray-100 mb-8">
            Register today and start connecting with the world.
          </p>
          <a
            href="/register"
            className="bg-white text-gray-800 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
          >
            Get Started
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
