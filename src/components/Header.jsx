import React from "react";
import LocaleContext from "../context/LocaleContext";

export default function Header() {
  const { locale } = React.useContext(LocaleContext);
  return (
    <>
      <div className="flex items-center justify-center  bg-cg">
        <div className="flex gap-2 m-5">
          <img src="/book-solid.svg" alt="My Notes" className="w-5" />
          <p className="font-bold text-lg sm:text-xl md:text-2xl text-tb2">
            {locale === "id" ? "Catatanku" : "My Notes"}
          </p>
        </div>
      </div>
    </>
  );
}
