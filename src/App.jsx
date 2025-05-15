import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import { Home, ProjectHome } from "./sections"
import ScrollToTop from "./components/ScrollToTop";


const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes> 
              <Route path="/" element={<Home />} />
              <Route path="home" element={<Home />} />
              <Route path="/projecthome" element={<ProjectHome />} />
       </Routes>
    </BrowserRouter>
  )};



export default App;
