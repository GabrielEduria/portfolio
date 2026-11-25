import Button from "../components/Button";
import DarkMode from "../components/DarkMode";
import ImageSpinner from "../components/ImageSpinner";
import TextDesign from "./TextDesign";

const Header = () => {
  return (
   <div className="flex items-stretch gap-1.5 sm:gap-3 mt-5 max-w-full sm:pb-1 z-4">
        <ImageSpinner
          src={"/images/myPicture.jpg"}
          alt="My Picture"
          className="w-25 h-auto sm:w-36 sm:h-auto aspect-square flex-shrink-0"
          imgClassName="w-full h-auto object-cover rounded-xl"
        />
      <div className="flex-1 min-w-0 ">
        <div className="flex items-start justify-between relative ">
          <h1 className="text-[25px]  xs:text-3xl sm:text-5xl 
          font-extrabold leading-tight truncate max-w-[100%] text-wrap min-w-0">
            Gabriel Eduria
          </h1> 
            <DarkMode />
        </div>
        <div className="flex flex-wrap items-center gap-x-3 gap-y-0.5 text-xs sm:text-sm text-gray-600 dark:text-white">
          <span>📍 Manila, Philippines</span>
          {/* Availability badge: pulsing green dot */}
          <span className="inline-flex items-center gap-1.5 rounded-full border border-gray-300 dark:border-gray-600 px-2 py-0.5 text-gray-600 dark:text-gray-300">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
            </span>
            Available for work
          </span>
        </div>

      <div className=" flex flex-wrap items-center pl-0.5 ">
        <span className="text-sm sm:text-base  pb-0.5 "><TextDesign variant="role">Full-Stack Developer</TextDesign> | <TextDesign variant="skill">React · Python · n8n Automations</TextDesign></span>
      </div>

        <div className="flex gap-3 text-xs sm:text-sm pt-0.5 sm:pt-1 text-wrap">
          <Button 
            href="mailto:gabrielezekieleduria@gmail.com"           >
            <i className="fa-solid fa-envelope pr-2"></i>
            Email Me
          </Button>

          <Button 
            href="https://wa.me/639672534399?text=Hi!">
            <i className="fa-solid fa-message pr-2"></i>
            Message me
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Header;
