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
    className="size-30 md:size-36 object-cover rounded-xl"
  />

  <div className="flex-1  md:pt-1">
    <div className="flex  items-center justify-between ">
      <h1 className="text-3xl sm:text-3xl md:text-4xl font-extrabold
       whitespace-nowrap overflow-hidden text-ellipsis">Gabriel Eduria</h1>
        <DarkMode />
    </div>
     
    
    <p className="text-xs md:text-sm text-gray-400">📍 Manila, Philippines</p>     

   <span className="pt-1 py-1 text-xs sm:text-sm md:text-base inline-flex space-x-2">
        <p className="text-blue-500 font-bold mr-2">Software Dev</p> 
        |
        <p className="text-red-500 font-bold ml-2">Fitness Coach</p>
      </span>
  

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