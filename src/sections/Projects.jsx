import React, { useContext } from "react";
import { DarkModeContext } from "../components/DarkModeContext";
import { 
  Motion,
  NavBar,
  Tag,
  Button,
  Footer,
  ImageSpinner
} from "../components";
import { projectCards } from "../constants/projectData";

const Projects = () => {
  const { isDarkMode } = useContext(DarkModeContext);

  return (
     <div className="relative w-full min-h-screen ">
      {isDarkMode ? (
      <div className="absolute top-0 z-[-2] h-full w-full bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      ) : (
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]"><div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#C9EBFF,transparent)]"></div></div>
       
      )}

      <Motion>
         <NavBar />
       <div className="w-full max-w-[880px] mx-auto container relative">
     
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 xs:gap-20 p-6">
        {projectCards.map((card, index) => (
          <div
            key={index}
            className="rounded-2xl flex flex-col transform transition duration-300 hover:scale-[1.02] "
          >
            <div className="w-full overflow-hidden rounded-t-2xl flex items-center justify-center sm:h-52">
              <ImageSpinner
                src={card.image}
                alt={`Screenshot of ${card.title}`}
                className="max-h-full max-w-full "
                imgClassName="w-full h-auto object-contain rounded-lg"
              />
            </div>

            <div className="flex flex-col pt-2 flex-grow">
              <div className="flex justify-between items-center">
                <h2 className="font-bold text-lg sm:text-2xl text-wrap">{card.title}</h2>
                <span className="text-sm font-semibold text-gray-500">
                  {card.year}
                </span>
              </div>
              <div className="flex flex-col gap-2 mb-3">
                <p className="text-gray-700 text-sm sm:text-base dark:border-gray-600 dark:text-gray-300  leading-relaxed">
                  {card.fullDescription}
                </p>
                <div className="flex flex-wrap gap-2 text-sm sm:text-base">
                  {card.tags.map((tag, i) => (
                    <Tag key={i}>{tag}</Tag>
                  ))}
                </div>
              </div>
              {card.url && (
                <Button href={card.url} target="_blank" rel="noopener noreferrer">
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

export default Projects;
