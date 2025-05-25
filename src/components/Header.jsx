import myPicture from "../assets/images/myPicture.jpg"
import Button from "../components/Button";
import DarkMode from "../components/DarkMode";

const Header = () => {
  return (
<div className="flex gap-2 sm:gap-4 pt-5 items-start">

  {/* Profile Picture */}
  <img 
    src={myPicture}
    alt="My Picture"
    className="size-24 sm:size-36 object-cover rounded-xl"
  />

  <div className="flex-1">
    <div className="flex items-start justify-between">
      <h1 className="text-xl sm:text-4xl font-extrabold leading-tight m-0">
        Gabriel Eduria
  
      </h1>

    </div>

    <p className="text-xs sm:text-sm text-gray-400 mt-0.5">📍 Manila, Philippines</p>

    <div className="mt-1 text-xs sm:text-base  flex flex-wrap items-center gap-x-2 gap-y-1">
      <span className="text-blue-500 font-bold">Software Developer</span>
      <span className="text-gray-400">|</span>
      <span className="text-red-500 font-bold">Fitness Coach</span>
    </div>
  

    <div className="flex gap-3 pt-1 text-xs sm:text-sm">
      <Button 
        href="mailto:gabrielezekieleduria@gmail.com"
          target="_blank"
            rel="noopener noreferrer" 
          >
            <i className="fa-solid fa-envelope pr-2"></i>
            Email Me
          </Button>

            <Button 
            href="https://ngl.link/gbrl.zkl"
            target="_blank"
            rel="noopener noreferrer" 
          >
            <i className="fa-solid fa-message pr-2"></i>
            NGL
        </Button>

    </div>

  </div>
</div>
  );
};
   
export default Header;