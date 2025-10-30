import React from "react";
import Banner from "../Components/Banner";
import HeroSection from "../Components/HeroSection";
import Cards from "../Components/Cards";

const Home = () => {
  return (
    <div>
      <header>
        <Banner></Banner>
        <HeroSection></HeroSection>
      </header>
      <main>
        <Cards></Cards>
      </main>
    </div>
  );
};

export default Home;
