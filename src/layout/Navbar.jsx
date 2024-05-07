import React, { useState } from "react";
import logo from "../assets/logo.png";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [clickedProject, setClickedProject] = useState(false);
  const location = useLocation();

  const handleClickedProject = () => {
    setClickedProject(true);
  };

  return (
    <nav className="flex justify-between items-center px-4 py-2 border border-slate-200 m-4 rounded-[50px]">
      <div className="flex h-14 items-center">
        <img src={logo} alt="logo" className="h-7 mx-20 mr-4" />
      </div>
      <div className="flex mr-20">
        {location.pathname === "/" && !clickedProject && (
          <>
            <Link
              to="/registration"
              className="border p-3 text-xs rounded-full mr-3"
            >
              Get Projects
            </Link>
            <Link
              to="/"
              className="text-white bg-black border p-3 text-xs rounded-full hover:bg-gray-600"
            >
              Onboard Talent
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
