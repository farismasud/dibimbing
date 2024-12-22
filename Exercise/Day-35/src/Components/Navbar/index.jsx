import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center p-5">
      <div>
        <h1>logo</h1>
      </div>
      <div className="flex justify-center items-center gap-3">
        <Link to="/">
          <div className="bg-blue-400 p-2 border border-black rounded-lg">
            <p>Home</p>
          </div>
        </Link>
        <Link to="/About">
          <div className="bg-blue-400 p-2 border border-black rounded-lg">
            <p>About</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
