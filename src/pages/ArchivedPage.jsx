import React, { useState, useEffect } from "react";
import {
  getArchivedNotes,
  deleteNote,
  unarchiveNote,
} from "../utils/network-data";
import NoteList from "../components/NoteList";
import { useSearchParams } from "react-router-dom";
import SearchBar from "../components/SearchBar";
import Header from "../components/Header";
import ThemeContext from "../context/ThemeContext";

export default function ArchivedPage() {
  const [archivedNotes, setArchivedNotes] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get("keyword");
  const [keyword, setKeyword] = useState(search || "");
  const { theme } = React.useContext(ThemeContext);

  useEffect(() => {
    const fetchArchivedNotes = async () => {
      const { data } = await getArchivedNotes();
      setArchivedNotes(data);
    };
    fetchArchivedNotes();
  }, []);

  const onDeleteHandler = async (id) => {
    await deleteNote(id);
    const { data } = await getArchivedNotes();
    setArchivedNotes(data);
  };
  const onUnarchiveHandler = async (id) => {
    await unarchiveNote(id);
    const { data } = await getArchivedNotes();
    setArchivedNotes(data);
  };
  const onKeywordChangeHandler = (keyword) => {
    setSearchParams({ keyword });
    setKeyword(keyword);
  };

  const filteredArchivedNotes = archivedNotes.filter((note) => {
    return note.title.toLowerCase().includes(keyword.toLowerCase());
  });
  console.log(archivedNotes);
  return (
    <>
      <Header />
      <div className="mx-20">
        <div className="flex justify-between items-center">
          <h2
            className={`font-semibold text-3xl ${
              theme === "light" ? "text-tb" : "text-tw"
            } my-5`}
          >
            Archived notes
          </h2>
          <SearchBar keyword={keyword} keywordChange={onKeywordChangeHandler} />
        </div>
        {archivedNotes.length > 0 ? (
          <NoteList
            notes={filteredArchivedNotes}
            onDelete={onDeleteHandler}
            onArchive={onUnarchiveHandler}
          />
        ) : (
          <p
            className={`text-center font-bold ${
              theme === "light" ? "text-tb" : "text-tw"
            }`}
          >
            Tidak ada catatan arsip
          </p>
        )}
      </div>
    </>
  );
}
