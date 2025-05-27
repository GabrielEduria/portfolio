import myPicture from "../assets/images/myPicture.jpg";
import Button from "../components/Button";
import DarkMode from "../components/DarkMode";

const Header = () => {
  return (

    <div className="flex gap-1.5 sm:gap-4 pt-5 items-start max-w-full sm:pb-3 z-4">
      <img 
        src={myPicture}
        alt="My Picture"
        className="w-24 sm:w-36 flex-shrink-0 object-cover rounded-xl"/>

      <div className="flex-1 min-w-0 ">
        <div className="flex items-start justify-between relative ">
          <h1 className="text-[28px]  xs:text-3xl sm:text-5xl 
          font-extrabold leading-tight truncate max-w-[100%] overflow-ellipsis min-w-0">
            Gabriel Eduria
          </h1> 
            <DarkMode />
        </div>
        <p className="text-xs sm:text-sm text-gray-600 dark:text-white">📍 Manila, Philippines</p>

      <div className=" flex flex-wrap items-center pl-1 ">
        <span className="text-sm sm:text-base text-blue-500 dark:text-red-600 font-bold">Software Developer</span>
      </div>

        <div className="flex gap-3 text-xs sm:text-sm pt-0.5 ">
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
