import React from "react";
import { addNote } from "../utils/local-data";
import NoteInput from "../components/NoteInput";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Navigation from "../components/Navigation";

export default function AddPage() {
  const navigate = useNavigate();
  function onAddNoteHandler(note) {
    addNote(note);
    navigate("/");
  }
  return (
    <>
      <Header />
      <Navigation />
      <div className="mx-20">
        <h2 className="font-semibold text-3xl text-tb my-5">Add notes</h2>
        <NoteInput addNote={onAddNoteHandler} />
      </div>
    </>
  );
}
