import { Link } from "react-router-dom"
import DarkMode from "../components/DarkMode";

const NavBar = () => {
  const PathToPageTitle = {
    "/projects": "Projects",
    "/resume": "Resume",
    "/": "Home",
  };

  const CurrentPage = PathToPageTitle[location.pathname] || "";
  return (
    <div className="sticky top-0 z-50 pt-3">
     <div className="
          mx-auto max-w-[880px] flex items-center justify-between 
          px-2 sm:px-4 h-full w-full bg-brown-900 rounded-full bg-clip-padding 
          backdrop-filter backdrop-blur-3xl bg-opacity-800 py-3
        text-gray-900 dark:text-neutral-300">
          <Link to="/" className="inline-flex items-center text-sm transition transform duration-200 hover:scale-105
                                      dark:text-gray-300">
            <i className="fa-solid fa-arrow-left mr-2" /> Home
          </Link>
        <div className="mx-auto  flex flex-col sm:flex-row sm:items-center text-nowrap">
          <h1 className="text-2xl sm:text-5xl font-semibold leading-none overflow-hidden">
            Gabriel Eduria
          </h1>
          <h3 className="text-xl sm:text-3xl pt-0.5  ml-0 sm:ml-3 sm:pt-2 leading-none">
            &gt; {CurrentPage}
          </h3>
        </div>
         <div>
          <DarkMode />
          </div>
      </div>
    </div>
  )
}

export default NavBar;
