import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { Outlet } from "react-router";

const MainLayout = () => {
  return (
    <div>
      <Header />
      <main className="min-h-[80vh]">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
