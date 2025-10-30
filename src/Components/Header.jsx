import React from "react";
import logo from "../assets/logo.png";
import { FaGithub } from "react-icons/fa";
import { NavLink } from "react-router";

const Header = ({ loading }) => {
  const links = [
    { name: "Home", path: "/" },
    { name: "Apps", path: "/all-apps" },
    { name: "Installation", path: "/my-installation" },
  ];

  return (
    <header
      className={`shadow-sm bg-base-100 sticky top-0 z-50 transition-all duration-300 ${
        loading ? "opacity-50 pointer-events-none" : "opacity-100"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        <div className="flex items-center gap-2">
          <a href="/">
            <img className="h-[50px] w-[50px]" src={logo} alt="logo" />
          </a>
          <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#632EE3] to-[#9F62F2]">
            APPS.IO
          </h2>
        </div>

        <nav className="hidden lg:flex items-center gap-6">
          {links.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `relative text-lg font-medium transition duration-300 ${
                  isActive
                    ? "text-transparent bg-clip-text bg-gradient-to-r from-[#632EE3] to-[#9F62F2] border-b-2 border-[#632EE3]"
                    : "text-gray-700 hover:text-purple-500"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        <div className="hidden lg:flex">
          <a
            href="https://github.com/silent-43"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 btn text-white font-bold bg-gradient-to-r from-[#632EE3] to-[#9f62f2] px-4 py-2 rounded-lg hover:opacity-90 transition text-lg"
          >
            <FaGithub size={20} /> Contribute...
          </a>
        </div>

        <div className="lg:hidden relative">
          <details className="relative">
            <summary className="cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </summary>
            <ul className="absolute right-0 mt-2 w-48 bg-base-100 rounded-md shadow-lg p-4 flex flex-col gap-2">
              {links.map((link) => (
                <li key={link.name}>
                  <NavLink
                    to={link.path}
                    className={({ isActive }) =>
                      `block text-lg font-medium transition duration-300 ${
                        isActive
                          ? "text-transparent bg-clip-text bg-gradient-to-r from-[#632EE3] to-[#9F62F2]"
                          : "text-gray-700 hover:text-purple-500"
                      }`
                    }
                  >
                    {link.name}
                  </NavLink>
                </li>
              ))}
              <li>
                <a
                  href="https://github.com/silent-43"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 btn text-white font-bold bg-gradient-to-r from-[#632EE3] to-[#9f62f2] px-4 py-2 rounded-lg hover:opacity-90 transition mt-2"
                >
                  <FaGithub size={16} /> Contribute...
                </a>
              </li>
            </ul>
          </details>
        </div>
      </div>
    </header>
  );
};

export default Header;
