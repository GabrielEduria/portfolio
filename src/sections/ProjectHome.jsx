import { 
  Motion,
  NavBar,
  Tag,
  Button,
  Footer
} from "../components";
import { projectCards } from "../constants/projectData";

const ProjectHome = () => {
  return (
  
    
      <div className="relative min-h-screen">
          
        <div class="absolute inset-0 -z-10 min-h-screen w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]"><div class="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_800px_at_100%_200px,#d5c5ff,transparent)]"></div></div>
          <Motion>
          <div className="w-full max-w-[880px] mx-auto">
            <NavBar />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-20 p-6 ">
              {projectCards.map((card, index) => (
                <div
                  key={index}
                  className="rounded-2xl flex flex-col"
                >
              
                  <div className="h-52 w-full overflow-hidden rounded-t-2xl flex items-center justify-center">
                    <img
                      src={card.image}
                      alt={`Screenshot of ${card.title}`}
                      className="object-contain h-full w-full"
                    />
                  </div>

                
                  <div className="flex flex-col pt-2">
                  
                    <div className="flex justify-between items-center">
                      <h2 className="font-bold text-lg truncate">{card.title}</h2>
                      <span className="text-sm font-semibold text-gray-500 ">{card.year}</span>
                    </div>

              <div className="flex flex-col gap-2 mb-3">
                  <p className="text-gray-700 text-sm md:text-base">{card.fullDescription}</p>
                  <div className="flex flex-wrap gap-2 text-sm md:text-base">
                    {card.tags.map((tag, i) => (
                      <Tag key={i}>{tag}</Tag>
                    ))}
                  </div>
              </div>

          
                   {card.url && (
  <Button
    href={card.url}
    target="_blank"
    rel="noopener noreferrer"
  >
    <i className="fa-solid fa-folder pr-2" />
    Repo
  </Button>
)}
                  
                  </div>
                </div>
              ))}
            </div>
          </div>
             <Footer />
                </Motion>
       </div>
   
 
  );
};

export default ProjectHome;
