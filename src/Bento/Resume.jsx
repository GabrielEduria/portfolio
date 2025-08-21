import { Link } from "react-router-dom";
import { ImageSpinner } from "../components"

const Resume = () => {
  return (
      <div className="p-3">
        <div className="flex justify-between">
            <h2 className="text-2xl font-bold pb-3 sm:pb-4">
              Resume
            </h2>
            <Link to="/resume" className="pt-1.5 transition transform duration-200 hover:scale-105">
                View 
                <i className="fa-solid fa-arrow-right  ml-2 "/> 
            </Link>        
         </div>
         <Link to="/resume">
  <ImageSpinner 
    src="/resume.jpg"
    alt="Resume Preview"
    className="transition transform duration-200 hover:scale-102 p-1"
    imgClassName="rounded-lg object-cover w-full blur-xs max-h-[200px]  "
  />
  </Link>
      </div>
  )
}

export default Resume;