import React, { useEffect, useState } from "react";
import NoteItem from "./NoteItem";
import PropTypes from "prop-types";
import { getActiveNotes } from "../utils/network-data";

export default function NoteList({ notes, onDelete, onArchive }) {

  return (
    <>
      <div className="mt-5 w-full">
        <div className="flex flex-col gap-10">
          {notes.map((note) => (
            <NoteItem
              key={note.id}
              title={note.title}
              body={note.body}
              createdAt={note.createdAt}
              archived={note.archived}
              id={note.id}
              onDelete={onDelete}
              onArchive={onArchive}
            />
          ))}
        </div>
      </div>
    </>
  );
}

NoteList.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.object).isRequired,
  onDelete: PropTypes.func.isRequired,
  onArchive: PropTypes.func.isRequired,
};
