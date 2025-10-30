import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <footer className="bg-gray-900 text-gray-300 py-8 mt-12">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-start md:items-center">
          <div className="mb-6 md:mb-0">
            <h1 className="text-2xl font-bold text-purple-500">AppStore</h1>
            <p className="mt-2 max-w-xs text-gray-400">
              Discover, install, and manage your favorite apps in one place.
              Made with ❤️ for app enthusiasts.
            </p>

            <div className="flex space-x-4 mt-4">
              <a
                href="https://www.facebook.com/share/1GX8xBP7Yf/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-purple-400 transition-colors text-xl"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://twitter.com/silennt_sohag"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-purple-400 transition-colors text-xl"
              >
                <FaTwitter />
              </a>
              
              <a
                href="https://linkedin.com/in/sohag-karmokar-470b3b30a"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-purple-400 transition-colors text-xl"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>

          <div className="mb-6 md:mb-0">
            <h2 className="font-semibold mb-2"><b>Navigate</b></h2>
            <ul>
              <li>
                <a href="/" className="hover:text-purple-400 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/all-apps"
                  className="hover:text-purple-400 transition-colors"
                >
                  Apps
                </a>
              </li>
              <li>
                <a
                  href="/my-installation"
                  className="hover:text-purple-400 transition-colors"
                >
                  Installation
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="font-semibold mb-2"><b>Contribution</b></h2>
            <a
              href="https://github.com/silent-43"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors"
            >
              GitHub Profile
            </a>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-700 pt-4 text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} AppStore. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Footer;
