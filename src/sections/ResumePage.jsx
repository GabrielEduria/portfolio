import React, { useContext } from "react";
import { 
          DarkModeContext, 
          NavBar,
          Motion, 
          Button,
          Footer 
        } from "../components";

const ResumePage = () => {
  const { isDarkMode } = useContext(DarkModeContext);
 
  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      {isDarkMode ? (
       <div className="absolute inset-0 -z-10  w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
      ) : (
       <div className="absolute inset-0 -z-10 w-full bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#63e_100%)]"></div>
      )}
      <Motion>
        <NavBar />
         <div className="max-w-[800px] px-2 sm:px-6 lg:px-8 mx-auto z-10 pt-2 sm:pt-5 flex flex-col items-center">
            <img
              src="/resume.jpg"
              alt="My Resume"
              className="max-w-full rounded drop-shadow-2xl sm:pt-10 mb-0"
            />
            <div className="pt-5 mb-0">
              <Button
                href="https://drive.google.com/uc?export=download&id=1VasV6w8qOzJY8t4ALf0FO23_-W5wORV-"
                download="Gabriel_Ezekiel_Resume.jpg"
              >
                <i className="fa-solid fa-download text-xs pr-3"></i>
                Download Resume
              </Button>
            </div>
          </div>
        <Footer />
      </Motion>
    </div>
  );
};

export default ResumePage;
