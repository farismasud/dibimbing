import React from "react";
import Navbar from "../../Components/Navbar";
import { useContext } from "react";
import { ThemeContext } from "../../Context/themeContext";

const HomePage = () => {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <div>
      <Navbar />
      <div
        className={`flex flex-col justify-center items-center gap-y-2 ${
          isDarkMode ? "bg-black" : "bg-slate-200"
        }`}
      >
        <h1 className={`text-4xl ${isDarkMode ? "text-white" : "text-black"}`}>
          Home
        </h1>
        <button
          className={`p-2 border border-black ${
            isDarkMode ? "bg-blue-300" : "bg-slate-300"
          }`}
          onClick={toggleTheme}
        >
          {isDarkMode ? "Switch to light mode" : "switch to dark mode"}
        </button>
      </div>
    </div>
  );
};

export default HomePage;
