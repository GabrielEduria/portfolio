import { Link } from "react-router-dom"

const NavBar = () => {
  return (
    <div className="sticky top-0 z-50 pt-3">
     <div className="
          mx-auto max-w-[880px] flex items-center justify-between px-4 h-full w-full bg-brown-900 rounded-full bg-clip-padding 
          backdrop-filter backdrop-blur-sm bg-opacity-50 py-3
        
        text-gray-900 dark:text-gray-300 ">
          <Link to="/Home" className="inline-flex items-center text-xs md:text-sm transition transform duration-200 hover:scale-105
                                      dark:text-gray-300">
            <i className="fa-solid fa-arrow-left mr-2" /> Home
          </Link>
        <div className="mx-auto pr-5 sm:pr-10 md:pr-15 flex flex-col sm:flex-row sm:items-center">
          <h1 className="text-2xl sm:text-5xl font-semibold leading-none">
            Gabriel Eduria
          </h1>
          <h3 className="text-xl sm:text-3xl pt-0.5 sm:pt-0 ml-0 sm:ml-3 leading-none">
            &gt; Projects
          </h3>
        </div>
      </div>
    </div>
  )
}

export default NavBar;
