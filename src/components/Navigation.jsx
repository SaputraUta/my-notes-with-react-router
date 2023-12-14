import React from "react";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { MdAddCircle } from "react-icons/md";
import { RiArchiveDrawerFill } from "react-icons/ri";

export default function Navigation() {
  return (
    <div className="relative">
      <div className="mt-5 fixed left-0 top-1/3 bg-gray-300 rounded-r-lg">
        <ul className="flex flex-col gap-8 items-center p-5">
          <li>
            <Link to="/" className="text-slate-800">
              <FaHome size={30} />
            </Link>
          </li>
          <li>
            <Link to="/add" className="text-slate-800">
              <MdAddCircle size={30} />
            </Link>
          </li>
          <li>
            <Link to="/archived" className="text-slate-800">
              <RiArchiveDrawerFill size={30} />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
