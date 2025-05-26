import About from "./About";
import Bio from "./Bio";
import TechStack from "./TechStack";
import Connect from "./Connect"; 
import ProjectLists from "./ProjectLists"

const BentoGrid = () => {
  return (
<div className="w-full gap-2 grid grid-cols-1 md:grid-cols-12 auto-rows-auto rounded-lg mt-3 relative">

  {/* 1. About */}
  <div className="border border-gray-300 col-span-12 md:col-span-8 md:row-span-2 rounded-xl order-1">
    <About />
  </div>

  {/* 2. Bio */}
  <div className="border border-gray-300 col-span-12 md:col-span-4 md:row-span-3 rounded-xl order-2">
    <Bio />
  </div>

  {/* 3. TechStack */}
  <div className="border border-gray-300 col-span-12 md:col-span-8 md:row-span-1 rounded-xl order-3">
    <TechStack />
  </div>

  {/* 4. Connect — should be after Bio and TechStack on desktop */}
  <div className="border border-gray-300 col-span-12 md:col-span-4 md:row-span-2 rounded-lg order-5 md:order-4">
    <Connect />
  </div>

  {/* 5. Projects — appears before Connect on mobile, but after on desktop */}
  <div className="border border-gray-300 col-span-12 md:col-span-8 md:row-span-2 rounded-lg order-4 md:order-5">
    <ProjectLists />
  </div>

</div>


  );
};

export default BentoGrid;