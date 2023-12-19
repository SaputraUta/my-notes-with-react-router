import React from "react";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { MdAddCircle } from "react-icons/md";
import { RiArchiveDrawerFill } from "react-icons/ri";
import { IoLogOutOutline } from "react-icons/io5";
import ThemeSwitch from "./ThemeSwitch";
import LocaleSwitch from "./LocaleSwitch";

export default function Navigation({ logout }) {
  return (
    <div className="relative">
      <div className="mt-5 fixed left-0 top-[15%] bg-gray-300 rounded-r-lg">
        <ul className="flex flex-col gap-8 items-center p-5">
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
