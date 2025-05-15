import myPicture from "../assets/images/myPicture.jpg"
import { Button } from ".";
import { DarkMode } from "."

const Header = () => {
  return (
<div className="flex gap-5 pt-5 md:pb-3">

  {/* Profile Picture */}
  <img 
    src={myPicture}
    alt="My Picture"
    className="size-28 md:size-38 object-cover rounded-xl"
  />

  <div className="flex flex-col w-full ">
    <div className="flex justify-between items-center pt-0.5">
      <h1 className="text-2xl md:text-4xl font-extrabold whitespace-nowrap overflow-hidden">Gabriel Eduria</h1>
        <DarkMode />
    </div>

    <p className="text-xs md:text-sm text-gray-400">📍 Manila, Philippines</p>      
    <p className="pt-1 py-1 leading-tight overflow-hidden text-sm md:text-base">
      <span className="text-blue-500 font-bold">Software Developer </span> |
      <span className="text-red-500 font-bold"> Fitness Coach </span>
    </p>

    <div className="flex gap-3 pt-1 text-xs md:text-sm">
      <Button 
        href="mailto:gabrielezekieleduria@gmail.com"
        text={
          <>
            <i class="fa-solid fa-envelope pr-2"></i>Email me
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