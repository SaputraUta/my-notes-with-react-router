import React from "react";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { MdAddCircle } from "react-icons/md";
import { RiArchiveDrawerFill } from "react-icons/ri";
import { IoLogOutOutline } from "react-icons/io5";
import ThemeSwitch from "./ThemeSwitch";
import LocaleSwitch from "./LocaleSwitch";
import PropTypes from "prop-types";

export default function Navigation({ logout }) {
  return (
    <div className="relative z-50">
      <div className="mt-5 w-full sm:w-fit fixed sm:left-0 bottom-0 sm:bottom-auto sm:top-[15%] bg-gray-300 rounded-r-lg">
        <ul className="flex sm:flex-col gap-8 items-center p-5">
          <li>
            <Link to="/">
              <FaHome size={30} />
            </Link>
          </li>
          <li>
            <Link to="/add">
              <MdAddCircle size={30} />
            </Link>
          </li>
          <li>
            <Link to="/archived">
              <RiArchiveDrawerFill size={30} />
            </Link>
          </li>
          <li>
            <button>
              <IoLogOutOutline onClick={logout} size={30} />
            </button>
          </li>
          <li>
            <ThemeSwitch />
          </li>
          <li>
            <LocaleSwitch />
          </li>
        </ul>
      </div>
    </div>
  );
}

Navigation.propTypes = {
  logout: PropTypes.func.isRequired,
};
