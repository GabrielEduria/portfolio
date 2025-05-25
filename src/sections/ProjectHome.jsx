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
    <Motion>
      <NavBar />

      <div className="p-6 w-full max-w-[880px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
          {projectCards.map((card, index) => (
            <div
              key={index}
              className="rounded-2xl flex flex-col"
            >
              {/* Image */}
              <div className="h-52 w-full overflow-hidden rounded-t-2xl flex items-center justify-center">
                <img
                  src={card.image}
                  alt={`Screenshot of ${card.title}`}
                  className="object-contain h-full w-full"
                />
              </div>

              {/* Content */}
              <div className="flex flex-col pt-2">
                {/* Title and Year */}
                <div className="flex justify-between items-center">
                  <h2 className="font-bold text-lg truncate">{card.title}</h2>
                  <span className="text-sm font-semibold text-gray-500 ">{card.year}</span>
                </div>

           <div className="flex flex-col gap-2 mb-3">
              <p className="text-gray-700 text-sm md:text-base">{card.description}</p>
              <div className="flex flex-wrap gap-2 text-sm md:text-base">
                {card.tags.map((tag, i) => (
                  <Tag key={i}>{tag}</Tag>
                ))}
              </div>
          </div>

                {/* View Project Button */}
      
                <Button 
                  href="https://ngl.link/gbrl.zkl"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa-solid fa-folder pr-2" />
                  Visit
              </Button>
               
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </Motion>
  );
};

export default ProjectHome;
