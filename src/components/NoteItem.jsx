import React from "react";
import { showFormattedDate } from "../utils/network-data";
import ArchivedButton from "./ArchivedButton";
import UnarchivedButton from "./UnarchivedButton";
import DeleteButton from "./DeleteButton";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import parser from "html-react-parser";

export default function NoteItem({
  title,
  body,
  createdAt,
  archived,
  id,
  onDelete,
  onArchive,
}) {
  return (
    <div className="flex flex-col sm:flex-row sm:justify-between w-full bg-cw h-fit9 rounded-lg">
      <div className="flex flex-col gap-2 p-2">
        <div className="flex flex-col gap-1">
          <Link to={`/notes/${id}`} className="text-base sm:text-lg md:text-xl text-tb font-semibold">
            {parser(title)}
          </Link>
          <p className="text-[10px] sm:text-sm md:text-base font-light text-tb">
            {showFormattedDate(createdAt)}
          </p>
        </div>
        <div className="text-xs sm:text-sm md:text-base text-tb">{parser(body)}</div>
      </div>
      <div className="p-4 sm:p-2 flex flex-row self-end sm:self-auto sm:flex-col justify-center items-center px-5 gap-5">
        <DeleteButton onDelete={onDelete} id={id} />
        {archived ? (
          <UnarchivedButton onUnarchive={onArchive} id={id} />
        ) : (
          <ArchivedButton id={id} onArchive={onArchive} />
        )}
      </div>
    </div>
  );
}

NoteItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  archived: PropTypes.bool.isRequired,
  onDelete: PropTypes.func.isRequired,
  onArchive: PropTypes.func.isRequired,
};
