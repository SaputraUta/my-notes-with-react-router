import React from "react";
import ThemeContext from "../context/ThemeContext";

export default function PageNotFound() {
  const { theme } = React.useContext(ThemeContext);
  return (
    <div className="h-screen flex justify-center items-center">
      <h1
        className={`text-4xl text-center font-bold ${
          theme === "light" ? "text-tb" : "text-tw"
        }`}
      >
        404 Page Not Found
      </h1>
    </div>
  );
}
