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
        <div className="relative h-full w-full bg-slate-950 -z-10"><div className="absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div><div className="absolute bottom-0 right-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div></div>
      ) : (  
        <div className="absolute top-0 right-0 z-[-2] h-full w-full bg-gradient-to-l from-blue-100 to-red-50" />

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







