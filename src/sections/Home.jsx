import { Motion } from "../components";
import  BentoGrid  from "./Bento/BentoGrid.jsx";
import { Header, Footer } from "../components/index.js";
import React, { useContext } from 'react';
import { DarkModeContext } from '../components/DarkModeContext'; 

const Home = () => {
  const { isDarkMode } = useContext(DarkModeContext);

  return (
    <div className="relative w-full min-h-screen overflow-hidden">

      {isDarkMode ? (
        <div className="absolute top-0 z-[-2] h-full w-full bg-black"></div>
      ) : (  
        <div className="absolute top-0 right-0 z-[-2] h-full w-full bg-white" />

      )}
      <div className="w-full max-w-[880px] px-2 sm:px-6 lg:px-8 mx-auto z-10">
        <Motion>
          <Header />
          <BentoGrid />
          <Footer />
        </Motion>
      </div>
    </div>
  );
};

export default Home;







