import About from "./About";
import Bio from "./Bio";
import TechStack from "./TechStack";
import Connect from "./Connect"; 
import ProjectLists from "./ProjectLists"
import Resume from "./Resume";
import Designs from "./Designs";
import Assault from "../../../public/assault.png";

const BentoGrid = () => {
  return (
    <div className="w-full gap-2 grid grid-cols-1 md:grid-cols-12 auto-rows-auto rounded-lg mt-3 relative">
      
      <div
        className="border border-gray-300 col-span-12 md:col-span-8 md:row-span-2 rounded-xl order-1 bg-cover bg-center"
        style={{ backgroundImage: `url(${Assault.src})` }}
      >
        <About />
      </div>

      <div
        className="border border-gray-300 col-span-12 md:col-span-4 md:row-span-3 rounded-xl order-2 bg-cover bg-center"
        style={{ backgroundImage: `url(${Assault.src})` }}
      >
        <Bio />
      </div>

      <div
        className="border border-gray-300 col-span-12 md:col-span-8 md:row-span-1 rounded-xl order-3 bg-cover bg-center"
        style={{ backgroundImage: `url(${Assault.src})` }}
      >
        <ProjectLists />
      </div>

      <div
        className="border border-gray-300 col-span-12 md:col-span-4 md:row-span-4 rounded-lg order-4 md:order-5 bg-cover bg-center"
        style={{ backgroundImage: `url(${Assault.src})` }}
      >
        <Resume />
      </div>

      <div
        className="border border-gray-300 col-span-12 md:col-span-8 md:row-span-4 rounded-lg order-4 md:order-5 bg-cover bg-center"
        style={{ backgroundImage: `url(${Assault.src})` }}
      >
        <TechStack />
      </div>

      <div
        className="border border-gray-300 col-span-12 md:col-span-8 md:row-span-4 rounded-lg order-4 md:order-5 bg-cover bg-center"
        style={{ backgroundImage: `url(${Assault.src})` }}
      >
        <Designs />
      </div>

      <div
        className="border border-gray-300 col-span-12 md:col-span-4 md:row-span-4 rounded-lg order-4 md:order-5 bg-cover bg-center"
        style={{ backgroundImage: `url(${Assault.src})` }}
      >
        <Connect />
      </div>
    </div>
  );
};

export default BentoGrid;
