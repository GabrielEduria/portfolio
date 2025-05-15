import { Motion } from "../components"
import { BentoGrid } from "./index.js"
import { Header, Footer } from "../components/index.js"


const Home = () => {
  return (
      <Motion>
            <div className="w-full relative min-h-screen">
              <div className="w-full max-w-[880px] mx-auto px-4 sm:px-6 lg:px-8 container">
                  <Header />
                  <BentoGrid />
                  <Footer />
              </div>
            </div>
     </Motion>
       )};



export default Home;