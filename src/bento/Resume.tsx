import { Link } from "react-router-dom";
import { ImageSpinner } from "../components"

const Resume = () => {
  return (
      <div className="p-3 h-full flex flex-col">
        <div className="flex justify-between">
            <h2 className="text-2xl font-bold pb-3 sm:pb-4">
              Resume
            </h2>
            <Link to="/resume" className="pt-1.5 transition transform duration-200 hover:scale-105">
                View 
                <i className="fa-solid fa-arrow-right  ml-2 "/> 
            </Link>        
         </div>
         {/* Preview stretches to fill the rest of the box */}
         <Link to="/resume" className="relative block flex-1 min-h-[200px]">
           <div className="absolute inset-0 p-1 transition transform duration-200 hover:scale-102">
             <ImageSpinner
               src="/resume.png"
               alt="Resume Preview"
               className="h-full"
               imgClassName="w-full h-full object-cover object-top rounded-lg blur-[2px]"
             />
           </div>
         </Link>
      </div>
  )
}

export default Resume;