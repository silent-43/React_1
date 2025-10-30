import React from "react";
import { Link } from "react-router";
import notFound from "../assets/App-Error.png";
const AppNotFound = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen  text-center space-y-3">
        <img className="py-6 mt-8" src={notFound} alt="" />
        <h1 className="font-bold text-4xl">OPPS!! APP NOT FOUND</h1>
        <p className="text-gray-600 text-lg mb-6">
          The App you are requesting is not found on our system. please try
          another apps
        </p>
        <Link
          to="/all-apps"
          className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition"
        >
          Go Back!
        </Link>
      </div>
    </>
  );
};

export default AppNotFound;
