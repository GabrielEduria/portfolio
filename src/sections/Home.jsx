import { Motion } from "../components"
import { BentoGrid } from "./index.js"
import { Header, Footer } from "../components/index.js"


const Home = () => {
  return (
      <Motion>
       <div className="relative w-full">
             <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
                <div className="w-full max-w-[880px] mx-auto px-4 sm:px-6 lg:px-8 container">
                  <Header />
                  <BentoGrid />
                  <Footer />
              </div>
         </div>
     </Motion>
       )};



export default Home;