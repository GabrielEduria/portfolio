import React, { useContext } from "react";
import { 
          DarkModeContext, 
          NavBar,
          Motion, 
          Button,
          Footer,
          ImageSpinner 
        } from "../components";

const ResumePage = () => {
  const { isDarkMode } = useContext(DarkModeContext);

  const downloadGoogleDrivePDF = () => {
    const fileId = '1ek8UqA-RXS2hwLgDkYw9wZRzCj5VW8tL';
    const downloadUrl = `https://drive.google.com/uc?export=download&id=${fileId}`;

    // Create a temporary hidden anchor element
    const link = document.createElement('a');
    link.href = downloadUrl;

    // The 'download' attribute forces the browser to download instead of opening it
    link.setAttribute('download', 'GabrielEduria.pdf');

    // Append to body, trigger click, and remove it
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="relative w-full min-h-screen">
      {isDarkMode ? (
       <div className="absolute inset-0 -z-10  w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
      ) : (
       <div className="absolute inset-0 -z-10 w-full bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#63e_100%)]"></div>
      )}
      <Motion>
        <NavBar />
         <div className="max-w-[880px] px-2 sm:px-6 lg:px-8 mx-auto z-10 pt-2 sm:pt-5 flex flex-col items-center">
       
            <ImageSpinner
              src="/resume.png"
              alt="My Resume"
              className=" sm:pt-5 mb-0"
              imgClassName="max-w-full rounded drop-shadow-xl/50"
            />
            <div className="pt-5 mb-0">
              <Button
                onClick={downloadGoogleDrivePDF}
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