import React, { useContext } from "react";
import { DarkModeContext } from "../components/DarkModeContext";
import { 
  Motion,
  NavBar,
  Tag,
  Button,
  Footer
} from "../components";
import { projectCards } from "../constants/projectData";

const Projects = () => {
  const { isDarkMode } = useContext(DarkModeContext);

  return (
     <div className="relative w-full min-h-screen ">
      {isDarkMode ? (
      <div className="relative h-full w-full bg-slate-950"><div className="absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div><div className="absolute bottom-0 right-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div></div>
      ) : (
       <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]"><div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#C9EBFF,transparent)]"></div></div>
       
      )}

      <Motion>
       <div className="w-full max-w-[880px] mx-auto container relative">
      <NavBar />
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 xs:gap-20 p-6">
        {projectCards.map((card, index) => (
          <div
            key={index}
            className="rounded-2xl flex flex-col transform transition duration-300 hover:scale-[1.02] "
          >
            <div className="w-full overflow-hidden rounded-t-2xl flex items-center justify-center sm:h-52">
              <img
                src={card.image}
                alt={`Screenshot of ${card.title}`}
                className="max-h-full max-w-full object-contain rounded-2xl"
              />
            </div>

            <div className="flex flex-col pt-2 flex-grow">
              <div className="flex justify-between items-center">
                <h2 className="font-bold text-lg truncate">{card.title}</h2>
                <span className="text-sm font-semibold text-gray-500">
                  {card.year}
                </span>
              </div>
              <div className="flex flex-col gap-2 mb-3">
                <p className="text-gray-700 text-sm sm:text-base dark:border-gray-600 dark:text-gray-300">
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
