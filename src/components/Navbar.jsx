import { AlignJustify, X } from "lucide-react";
import { useState } from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleShowSlider = () => {};

  return (
    <header className="absolute top-0 w-full h-full text-white z-[10] overflow-hidden">
      <div className="flex w-full items-center justify-between py-5 px-5 md:px-10">
        <div className="hidden md:flex items-start gap-5">
          <FaTwitter />
          <FaFacebookF />
          <FaInstagram />
        </div>
        <div className="w-full md:w-fit flex items-center justify-between">
          <div className="italic text-3xl md:text-4xl font-black ">
            Pizzania
          </div>
          <AlignJustify
            onClick={() => setIsOpen(!isOpen)}
            className="flex md:hidden text-2xl"
          />
        </div>
        <button className="border hidden md:flex p-1 rounded mt-5 hover:bg-red-400 ">
          OrderOnline
        </button>
      </div>

      <div className="hidden md:flex justify-center w-full mt-10 items-center gap-x-20 text-md font-medium px-4 py-2">
        <NavLink className={(e) => (e.isActive ? "text-red-400" : " ")} to="/">
          Home
        </NavLink>
        <NavLink
          className={(e) => (e.isActive ? "text-red-400" : " ")}
          to="/ourmenu"
        >
          OurMenu
        </NavLink>
        <NavLink
          className={(e) => (e.isActive ? "text-red-400" : " ")}
          to="/create"
        >
          Create
        </NavLink>
        <NavLink
          className={(e) => (e.isActive ? "text-red-400" : " ")}
          to="/about"
        >
          About
        </NavLink>
        <NavLink
          className={(e) => (e.isActive ? "text-red-400" : " ")}
          to="/offers"
        >
          Offers
        </NavLink>
        <NavLink
          className={(e) => (e.isActive ? "text-red-400" : " ")}
          to="/contact"
        >
          Contact
        </NavLink>
      </div>

      <div
        className={`absolute top-0 -right-[50vw] flex md:hidden h-screen w-1/2 transition-all ease-linear duration-300 text-black bg-[#ffffff] ${
          isOpen === true ? "right-0" : ""
        }`}
      >
        <X
          onClick={() => setIsOpen(!isOpen)}
          className="absolute right-4 top-6 w-8 h-8"
        />
        <div className="flex flex-col text-2xl mt-20 ml-20 gap-5">
          <NavLink
            onClick={() => setIsOpen()}
            className={(e) => (e.isActive ? "text-red-400" : " ")}
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className={(e) => (e.isActive ? "text-red-400" : " ")}
            to="/ourmenu"
          >
            OurMenu
          </NavLink>
          <NavLink
            className={(e) => (e.isActive ? "text-red-400" : " ")}
            to="/create"
          >
            Create
          </NavLink>
          <NavLink
            className={(e) => (e.isActive ? "text-red-400" : " ")}
            to="/about"
          >
            About
          </NavLink>
          <NavLink
            className={(e) => (e.isActive ? "text-red-400" : " ")}
            to="/offers"
          >
            Offers
          </NavLink>
          <NavLink
            className={(e) => (e.isActive ? "text-red-400" : " ")}
            to="/contact"
          >
            Contact
          </NavLink>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
