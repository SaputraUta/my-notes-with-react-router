import React from "react";
import ThemeContext from "../context/ThemeContext";
import LocaleContext from "../context/LocaleContext";

export default function PageNotFound() {
  const { locale } = React.useContext(LocaleContext);
  const { theme } = React.useContext(ThemeContext);
  return (
    <div className="h-screen flex justify-center items-center">
      <h1
        className={`text-4xl text-center font-bold ${
          theme === "light" ? "text-tb" : "text-tw"
        }`}
      >
        {locale === "id" ? "404 Halaman Tidak Ditemukan" : "404 Page Not Found"}
      </h1>
    </div>
  );
}
