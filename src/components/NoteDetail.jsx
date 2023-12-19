import React from "react";
import { showFormattedDate } from "../utils/network-data";
import PropTypes from "prop-types";
import parser from "html-react-parser";

export default function NoteDetail({ title, body, createdAt, archived }) {
  return (
    <div className="w-full flex flex-col gap-2 p-2">
      <div className="flex flex-col gap-1">
        <h3 className="text-xl text-tb font-bold">{parser(title)}</h3>
        <p className="font-light text-tb text-sm">
          This note created at {showFormattedDate(createdAt)}{" "}
          {archived ? <span>(archived)</span> : <span>(active)</span>}
        </p>
      </div>
      <div className="text-tb">{parser(body)}</div>
    </div>
  );
}

NoteDetail.proptypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  archived: PropTypes.bool.isRequired,
};
