import React from "react";
import error from "../assets/error-404.png";
const ErrorPage = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center py-6">
        <img src={error} alt="" />
        <h1 className="font-bold text-4xl mt-6">Oops, page not found!</h1>
        <p className="text-[#627382] mt-3">
          The page you are looking for is not available.
        </p>
      </div>
      <div className="mt-8 flex justify-center">
        <a
          href="/"
          className="px-6 py-2 rounded-[10px] font-bold text-white bg-gradient-to-r from-[#632EE3] to-[#9f62f2] hover:from-[#9f62f2] hover:to-[#632EE3] transition-colors duration-300"
        >
          Go Back!
        </a>
      </div>
    </div>
  );
};

export default ErrorPage;
