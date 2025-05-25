import { Motion } from "../components"
import { BentoGrid } from "./index.js"
import { Header, Footer } from "../components/index.js"
import React, { useContext } from 'react';
import { DarkModeContext } from '../components/DarkModeContext'; 


const Home = () => {
  const { isDarkMode } = useContext(DarkModeContext);

  return (
    <div className="relative w-full min-h-screen overflow-x-hidden">

      {isDarkMode ? (
        <div class="relative h-full w-full bg-slate-950"><div class="absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div><div class="absolute bottom-0 right-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div></div>
      ) : (
     <div class="absolute top-0 z-[-2] inset-0 min-h-full w-screen rotate-180 transform bg-white bg-[radial-gradient(60%_120%_at_50%_50%,hsla(0,0%,100%,0)_0,rgba(252,205,238,.5)_100%)]"></div>

      )}

      <div className="w-full max-w-[880px] mx-auto px-4 sm:px-6 lg:px-8 container relative z-10">
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