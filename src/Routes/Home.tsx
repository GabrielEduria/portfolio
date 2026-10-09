import { Motion } from "../components/index.js";
import BentoGrid from "../bento/BentoGrid.jsx";
import { Header, Footer } from "../components/index.js";
import React, { useContext } from 'react';
import { DarkModeContext } from '../components/DarkModeContext.jsx'; 

const Home = () => {
  const { isDarkMode } = useContext(DarkModeContext);

  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      {isDarkMode ? (
        <div className="absolute top-0 z-[-2] min-h-full w-full bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      ) : (  
        <div className="pointer-events-none fixed inset-0 -z-10 hidden h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] bg-size-[16px_16px] mask-[linear-gradient(to_right,#000_0,transparent_240px,transparent_calc(100%_-_240px),#000_100%)] lg:block dark:bg-black dark:bg-[radial-gradient(#4c1d95_1px,transparent_1px)]"></div>
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







