import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import { Home, Projects } from "./sections"
import ScrollToTop from "./components/ScrollToTop";
 

const App = () => {
  return (
    <BrowserRouter>
     <ScrollToTop />
      <Routes> 
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<Projects />} />
       </Routes>
    </BrowserRouter>
  )};



export default App;
