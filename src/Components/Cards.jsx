import React from "react";
import { FaStar, FaDownload } from "react-icons/fa";
import { useLoaderData, Link } from "react-router";

const Cards = () => {
  const user = useLoaderData();

  const topApps = user.slice(0, 8);

  return (
    <div>
      <div className="w-11/12 mx-auto pt-20 pb-8 text-center">
        <h1 className="font-bold text-4xl">Trending Apps</h1>
        <p className="text-[#627382] mt-4">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {topApps.map((data) => (
            <Link key={data.id} to={`/app-details/${data.id}`}>
              <div className="bg-white hover:scale-105 transition-transform ease-in-out rounded-lg shadow-md overflow-hidden hover:shadow-xl duration-300 cursor-pointer">
                <div className="h-40 bg-gray-200 flex items-center justify-center">
                  <img
                    src={data.image}
                    alt={data.title}
                    className="h-[100px] w-auto object-cover"
                  />
                </div>

                <div className="p-4">
                  <h3 className="text-md font-semibold text-gray-800 truncate">
                    {data.title}
                  </h3>

                  <div className="mt-3 flex justify-between items-center">
                    <div className="flex items-center gap-1 bg-green-100 text-green-600 px-2 py-1 rounded-full text-sm font-medium">
                      <FaDownload size={14} />
                      {data.downloads >= 1000000
                        ? `${(data.downloads / 1000000).toFixed(1)}M`
                        : `${(data.downloads / 1000).toFixed(1)}K`}
                    </div>

                    <div className="flex items-center gap-1 bg-yellow-100 text-yellow-600 px-2 py-1 rounded-full text-sm font-medium">
                      <FaStar size={14} />
                      {data.ratingAvg}
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-8 flex justify-center">
          <Link
            to="/all-apps"
            className="px-6 py-3 rounded-[10px] font-bold text-white bg-gradient-to-r from-[#632EE3] to-[#9f62f2] hover:from-[#9f62f2] hover:to-[#632EE3] transition-colors duration-300"
          >
            Show All
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cards;
