import myPicture from "../assets/images/myPicture.jpg"
import { Button } from ".";
import { DarkMode } from "."

const Header = () => {
  return (
<div className="flex gap-2 sm:gap-[3.5] md:gap-5 pt-5 md:pb-3 overflow-hidden">

  {/* Profile Picture */}
  <img 
    src={myPicture}
    alt="My Picture"
    className="size-28 md:size-38 object-cover rounded-xl"
  />

  <div className="flex-1 min-w-0 pt-1">
    <div className="flex  items-center justify-between gap-2">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold
       whitespace-nowrap overflow-hidden text-ellipsis">Gabriel Eduria</h1>
        <DarkMode />
    </div>

    <p className="text-xs md:text-sm text-gray-400">📍 Manila, Philippines</p>      
    <p className="pt-1 py-1  text-xs sm:text-sm md:text-base">
      <span className="text-blue-500 font-bold">Software Developer </span> |
      <span className="text-red-500 font-bold"> Fitness Coach </span>
    </p>

    <div className="flex gap-3 pt-1 text-xs md:text-sm">
      <Button 
        href="mailto:gabrielezekieleduria@gmail.com"
        text={
          <>
            <i className="fa-solid fa-envelope pr-2"></i>Email me
          </>
        }
      />

      <Button text="Message Me"/>
    </div>

  </div>
</div>
  );
};
   
export default Header;