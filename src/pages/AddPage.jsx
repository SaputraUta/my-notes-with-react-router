import React from "react";
import { addNote } from "../utils/network-data";
import NoteInput from "../components/NoteInput";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import ThemeContext from "../context/ThemeContext";
import LocaleContext from "../context/LocaleContext";

export default function AddPage() {
  const navigate = useNavigate();
  const { locale } = React.useContext(LocaleContext);
  async function onAddNoteHandler(note) {
    addNote(note);
    navigate("/");
  }
  const { theme } = React.useContext(ThemeContext);
  return (
    <>
      <Header />
      <div className="mx-10 sm:mx-20">
        <h2
          className={`font-semibold text-xl sm:text-2xl md:text-3xl my-5 ${
            theme === "light" ? "text-tb" : "text-tw"
          }`}
        >
          {locale === "id" ? "Tambah catatan" : "Add notes"}
        </h2>
        <NoteInput addNote={onAddNoteHandler} />
      </div>
    </>
  );
}
