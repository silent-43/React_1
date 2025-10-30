import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import Loader from "../Components/Loader";
import download from "../assets/icon-downloads.png";
import star from "../assets/icon-ratings.png";
import review from "../assets/icon-review.png";
import AppNotFound from "./AppNotFound.JSX";
import { useLoaderData, useParams } from "react-router";

const AppDetails = () => {
  const { id } = useParams();
  const CardData = useLoaderData();
  const [app, setApp] = useState(null);
  const [loading, setLoading] = useState(true);
  const [installed, setInstalled] = useState(false);

  useEffect(() => {
    if (CardData && id) {
      const foundApp = CardData.find((app) => app.id == id);
      setApp(foundApp);
      setLoading(false);

      const storedApps =
        JSON.parse(localStorage.getItem("installedApps")) || [];
      const isInstalled = storedApps.some((item) => item.id == id);
      setInstalled(isInstalled);
    }
  }, [CardData, id]);

  const handleAddInstalled = () => {
    const storedApps = JSON.parse(localStorage.getItem("installedApps")) || [];
    const exists = storedApps.some((item) => item.id == app.id);

    if (exists) {
      toast.info("App already installed!");
      return;
    }

    const updated = [...storedApps, app];
    localStorage.setItem("installedApps", JSON.stringify(updated));
    setInstalled(true);

    toast.success(`${app.title} installed successfully!`, {
      position: "top-center",
      autoClose: 2000,
    });
  };

  if (loading) return <Loader />;
  if (!app) return <AppNotFound />;

  return (
    <div className="w-11/12 max-w-6xl mx-auto my-10 p-4 md:p-6 rounded-lg">
      <div className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-10">
        <div className="flex-shrink-0 flex justify-center md:justify-start w-full md:w-60">
          <img
            src={app.image}
            alt={app.title}
            className="w-48 h-48 md:w-60 md:h-60 object-cover rounded-lg"
          />
        </div>

        <div className="flex-1">
          <h1 className="text-2xl md:text-3xl font-bold py-2">{app.title}</h1>
          <p className="text-sm md:text-base text-gray-500 mt-1">
            Developed by{" "}
            <span className="text-purple-600 font-semibold">
              {app.companyName}
            </span>
          </p>
          <div className="border-b-2 border-[#d0d4d8] py-3 mb-6 md:mb-8"></div>

          <div className="flex flex-wrap gap-6 mt-4">
            <div className="flex flex-col items-center w-24">
              <img className="w-8 h-8" src={download} alt="" />
              <span className="text-gray-500 text-sm mt-2 mb-1">Downloads</span>
              <span className="font-bold text-lg">
                {app.downloads >= 1000000
                  ? `${(app.downloads / 1000000).toFixed(1)}M`
                  : `${(app.downloads / 1000).toFixed(1)}K`}
              </span>
            </div>

            <div className="flex flex-col items-center w-24">
              <img className="w-8 h-8" src={star} alt="" />
              <span className="text-gray-500 text-sm mt-2 mb-1">
                Avg Ratings
              </span>
              <span className="font-bold text-lg">{app.ratingAvg}</span>
            </div>

            <div className="flex flex-col items-center w-24">
              <img className="w-8 h-8" src={review} alt="" />
              <span className="text-gray-500 text-sm mt-2 mb-1">
                Total Reviews
              </span>
              <span className="font-bold text-lg">
                {app.reviews >= 1000
                  ? `${(app.reviews / 1000).toFixed(1)}K`
                  : app.reviews}
              </span>
            </div>
          </div>

          <button
            onClick={handleAddInstalled}
            disabled={installed}
            className={`mt-6 px-6 py-2 rounded-lg w-full md:w-auto transition ${
              installed
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-green-500 hover:bg-green-600 text-white"
            }`}
          >
            {installed ? "Installed" : `Install Now (${app.size} MB)`}
          </button>
        </div>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-semibold mb-4 border-b pb-2">Ratings</h2>
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={app.ratings} layout="vertical" margin={{ left: 20 }}>
            <XAxis type="number" />
            <YAxis dataKey="name" type="category" />
            <Tooltip />
            <Bar dataKey="count" fill="#f97316" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-10">
        <h2 className="text-2xl font-semibold mb-4 border-b pb-2">
          Description
        </h2>
        <p className="text-gray-700 leading-relaxed text-sm md:text-base">
          {app.description}
        </p>
      </div>

      <ToastContainer />
    </div>
  );
};

export default AppDetails;
