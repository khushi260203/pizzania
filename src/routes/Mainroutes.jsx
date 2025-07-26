import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import OurMenu from "../pages/OurMenu";
import About from "../pages/About";
import Offers from "../pages/Offers";
import Contact from "../pages/Contact";
import Create from "../pages/Create";
import Submitted from "../pages/Submitted";
import Kh from "../pages/Kh";

const Mainroutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/ourmenu" element={<OurMenu />} />
      <Route path="/about" element={<About />} />
      <Route path="/offers" element={<Offers />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/create" element={<Create />} />
      <Route path="/submitted" element={<Submitted />} />
      <Route path="/created" element={<Kh />} />
      
    </Routes>
  );
};

export default Mainroutes;
