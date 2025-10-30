import React from "react";
import { FaAppStoreIos } from "react-icons/fa";

const Banner = () => {
  return (
    <div>
      <div>
        <div className="hero bg-base-200">
          <div className="hero-content text-center">
            <div className="w-full mx-auto py-10">
              <h1 className="text-5xl font-bold">We Build</h1>
              <h1 className="text-5xl font-bold">
                <span className="text-[#7f4ee8]">Productive</span> Apps
              </h1>







              <div className="py-5">
                <p className="text-[#627382]">
                  At HERO.IO , we craft innovative apps designed to make
                  everyday life simpler, smarter, and more exciting.
                </p>
                <p className="text-[#627382]">
                  Our goal is to turn your ideas into digital experiences that
                  truly make an impact.
                </p>
              </div>


              

              
              <div className="flex justify-center gap-4 py-5">
                <a
                  target="_blank"
                  href="https://play.google.com/store/games?hl=en"
                  className="btn bg-[#f5f5f5] text-xl p-2 px-2"
                >
                  <img
                    className="w-[27px] h-[22px]"
                    src="https://img.freepik.com/premium-vector/google-play-logo_578229-280.jpg?semt=ais_hybrid&w=740&q=80"
                    alt="play"
                  />
                  Google Play
                </a>

                <a
                  href="https://www.apple.com/app-store/"
                  target="_blank"
                  className="btn bg-[#f5f5f5] text-xl p-2 px-2"
                >
                  <FaAppStoreIos color="#00a7fb" size={22} />
                  App Store
                </a>

                
              </div>









            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
