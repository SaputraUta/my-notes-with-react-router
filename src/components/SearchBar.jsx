import React from "react";
import PropTypes from "prop-types";
import { IoIosSearch } from "react-icons/io";

export default function SearchBar({ keyword, keywordChange }) {
  return (
    <div className="relative">
      <IoIosSearch className="absolute top-2 left-2" size={25} />
      <input
        type="text"
        placeholder="Search by title"
        value={keyword}
        onChange={(event) => keywordChange(event.target.value)}
        className="border-2 h-10 border-blue-950 rounded-lg px-2 pl-8"
      />
    </div>
  );
}

SearchBar.proptypes = {
  keyword: PropTypes.string.isRequired,
  keywordChange: PropTypes.func.isRequired,
};
