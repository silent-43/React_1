import React, { useState, useEffect } from "react";
import { FaDownload, FaStar } from "react-icons/fa";
import { Link, useLoaderData } from "react-router";
import Loader from "./Loader";

const AllApplications = () => {
  const loadedData = useLoaderData();
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [searchedApps, setSearchedApps] = useState([]);

  useEffect(() => {
    if (loadedData && loadedData.length > 0) {
      setSearchedApps(loadedData);
    }
  }, [loadedData]);

  useEffect(() => {
    if (!loadedData) return;

    setLoading(true);
    const delay = setTimeout(() => {
      const term = search.trim().toLowerCase();
      const filtered = term
        ? loadedData.filter((app) => app.title.toLowerCase().includes(term))
        : loadedData;
      setSearchedApps(filtered);
      setLoading(false);
    }, 300);

    return () => clearTimeout(delay);
  }, [search, loadedData]);

  if (!loadedData) return <Loader />;

  const handleShowAll = () => {
    setSearch("");
    setSearchedApps(loadedData);
  };

  return (
    <div>
      <div className="w-11/12 mx-auto pt-16 pb-8 text-center">
        <h1 className="font-bold text-4xl">Our All Applications</h1>
        <p className="text-[#627382] mt-4">
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4 sm:gap-0">
          <p className="text-xl font-semibold text-black text-left">
            ({searchedApps.length}) : Apps Found
          </p>

          <div className="w-full sm:w-80 relative">
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              type="search"
              placeholder="Search Apps"
              className="w-full pl-10 pr-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 text-gray-700 placeholder-gray-500 transition"
            />
            <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
              <svg
                className="h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </span>
          </div>
        </div>

        {loading ? (
          <Loader />
        ) : searchedApps.length === 0 ? (
          <div className="text-center mt-10">
            <p className="text-gray-500 text-2xl mb-4">No Apps Found</p>
            <button
              onClick={handleShowAll}
              className="bg-purple-600 cursor-pointer mt-4 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition"
            >
              Show All Apps
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {searchedApps.map((data) => (
              <Link key={data.id} to={`/app-details/${data.id}`}>
                <div className="bg-white hover:scale-105 transition-transform ease-in-out rounded-lg shadow-md overflow-hidden hover:shadow-xl duration-300">
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
        )}
      </div>
    </div>
  );
};

export default AllApplications;
