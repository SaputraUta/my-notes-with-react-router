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
      <div className="mx-20">
        <h2
          className={`font-semibold text-3xl ${
            theme === "light" ? "text-tb" : "text-tw"
          } my-5`}
        >
          {locale === "id" ? "Tambah catatan" : "Add notes"}
        </h2>
        <NoteInput addNote={onAddNoteHandler} />
      </div>
    </>
  );
}
