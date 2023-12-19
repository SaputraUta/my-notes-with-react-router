import React from "react";
import ThemeContext from "../context/ThemeContext";
import { CiLight } from "react-icons/ci";
import { MdDarkMode } from "react-icons/md";

export default function ThemeSwitch() {
  const { theme, toggleTheme } = React.useContext(ThemeContext);
  return (
    <button onClick={toggleTheme}>
      {theme === "light" ? <CiLight size={30} /> : <MdDarkMode size={30} />}
    </button>
  );
}
