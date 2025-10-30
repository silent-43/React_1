import React, { useEffect, useState } from "react";
import { FaDownload, FaStar } from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AppInstalled = () => {
  const [apps, setApps] = useState([]);
  const [sortOrder, setSortOrder] = useState("");

  useEffect(() => {
    const storedApps = JSON.parse(localStorage.getItem("installedApps")) || [];
    setApps(storedApps);
  }, []);

  const handleUninstall = (id) => {
    const updated = apps.filter((app) => app.id !== id);
    setApps(updated);
    localStorage.setItem("installedApps", JSON.stringify(updated));
    toast.success("App uninstalled successfully!");
  };

  const handleSort = (e) => {
    const value = e.target.value;
    setSortOrder(value);
    const sorted = [...apps].sort((a, b) =>
      value === "high-low"
        ? b.downloads - a.downloads
        : a.downloads - b.downloads
    );
    setApps(sorted);
  };

  return (
    <div className="w-11/12 mx-auto pt-16 pb-8">
      <ToastContainer position="top-center" />
      <h1 className="font-bold text-3xl text-center">Your Installed Apps</h1>
      <p className="text-center text-gray-500 mb-6">
        Explore All Trending Apps on the Market developed by us
      </p>

      <div className="flex justify-end mb-4">
        <select
          value={sortOrder}
          onChange={handleSort}
          className="border border-gray-300 rounded-md px-3 py-2 text-sm"
        >
          <option value="">Sort by Downloads</option>
          <option value="high-low">High - Low</option>
          <option value="low-high">Low - High</option>
        </select>
      </div>

      {apps.length === 0 ? (
        <p className="text-center text-gray-500 mt-10 text-lg">
          No apps installed yet.
        </p>
      ) : (
        <div className="space-y-4">
          {apps.map((app) => (
            <div
              key={app.id}
              className="flex items-center justify-between bg-white shadow p-4 rounded-lg"
            >
              <div className="flex items-center gap-4">
                <img
                  src={app.image}
                  alt={app.title}
                  className="h-14 w-14 object-cover rounded-md bg-gray-100"
                />
                <div>
                  <h3 className="font-semibold text-gray-800">{app.title}</h3>
                  <div className="flex items-center gap-3 mt-1 text-sm text-gray-500">
                    <span className="flex items-center gap-1 text-green-600">
                      <FaDownload />{" "}
                      {app.downloads >= 1000000
                        ? `${(app.downloads / 1000000).toFixed(1)}M`
                        : `${(app.downloads / 1000).toFixed(1)}K`}
                    </span>
                    <span className="flex items-center gap-1 text-yellow-500">
                      <FaStar /> {app.ratingAvg}
                    </span>
                    <span>{app.size} MB</span>
                  </div>
                </div>
              </div>

              <button
                onClick={() => handleUninstall(app.id)}
                className="bg-[#00d390] hover:bg-[#01faab] hover:text-red-500 hover:font-semibold text-white px-4 py-2 rounded-md transition"
              >
                Uninstall
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AppInstalled;
