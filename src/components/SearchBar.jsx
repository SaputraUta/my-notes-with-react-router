import React from "react";
import PropTypes from "prop-types";
import { IoIosSearch } from "react-icons/io";
import LocaleContext from "../context/LocaleContext";

export default function SearchBar({ keyword, keywordChange }) {
  const { locale } = React.useContext(LocaleContext);
  return (
    <div className="relative">
      <IoIosSearch className="absolute top-1 sm:top-2 left-2" size={25} />
      <input
        type="text"
        placeholder={`${
          locale === "id" ? "Cari berdasarkan nama" : "Search by title"
        }`}
        value={keyword}
        onChange={(event) => keywordChange(event.target.value)}
        className="border-2 h-8 sm:h-10 text-sm sm:text-base md:text-lg border-blue-950 rounded-lg px-2 pl-8"
      />
    </div>
  );
}

SearchBar.proptypes = {
  keyword: PropTypes.string.isRequired,
  keywordChange: PropTypes.func.isRequired,
};
