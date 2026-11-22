import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Projects, ProjectDetail, ResumePage } from "./Routes"
import ScrollToTop from "./components/ScrollToTop";
 

const App = () => {
  return (
    <BrowserRouter>
     <ScrollToTop />
      <Routes> 
              <Route path="/" element={<Home />} />
              <Route path="/resume" element={<ResumePage />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/projects/:slug" element={<ProjectDetail />} />
       </Routes>
    </BrowserRouter>
  )};



export default App;
