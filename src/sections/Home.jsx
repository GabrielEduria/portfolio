import { Motion } from "../components"
import { BentoGrid } from "./index.js"
import { Header, Footer } from "../components/index.js"


const Home = () => {
  return (
   
       <div className="relative w-full">
           <div class="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]"></div>
                <div className="w-full max-w-[880px] mx-auto px-4 sm:px-6 lg:px-8 container">
                     <Motion>
                        <Header />
                        <BentoGrid />
                        <Footer />
                  </Motion>
              </div>
         </div>
  
       )};



export default Home;