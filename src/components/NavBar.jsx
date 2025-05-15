import { Link } from "react-router-dom"

const NavBar = () => {
  return (
      <div className="sticky top-0 z-50 w-full py-4">
                 <div className="mx-auto max-w-[880px] flex items-center justify-between px-4">
                    <Link to="/Home" className="inline-flex items-center text-sm md:text-base">
                        <i className="fa-solid fa-arrow-left mr-2" /> Home 
                    </Link>                 
                    <div className="mx-auto sm:flex sm:items-center md:inline-flex pr-5 md:pr-15 sm:pr-10 items-baseline ">
                        <h1 className="text-3xl sm:text-5xl font-semibold">Gabriel Eduria</h1>
                        <h3 className="text-2xl sm:text-3xl">&gt; Projects</h3>
                    </div>
                </div>
     </div>
  )
}

export default NavBar