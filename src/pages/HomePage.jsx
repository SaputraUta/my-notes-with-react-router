import React, { useState, useEffect } from "react";
import NoteList from "../components/NoteList";
import { useSearchParams } from "react-router-dom";
import SearchBar from "../components/SearchBar";
import { deleteNote, getActiveNotes, archiveNote } from "../utils/network-data";
import Header from "../components/Header";
import ThemeContext from "../context/ThemeContext";

export default function HomePage() {
  const [activeNotes, setActiveNotes] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get("keyword");
  const [keyword, setKeyword] = useState(search || "");
  const { theme } = React.useContext(ThemeContext);

  useEffect(() => {
    getActiveNotes().then(({ data }) => {
      setActiveNotes(data);
    });
  }, []);

  const onDeleteHandler = async (id) => {
    await deleteNote(id);
    const { data } = await getActiveNotes();
    setActiveNotes(data);
  };
  const onArchiveHandler = async (id) => {
    await archiveNote(id);
    const { data } = await getActiveNotes();
    setActiveNotes(data);
  };
  const onKeywordChangeHandler = (keyword) => {
    setSearchParams({ keyword });
    setKeyword(keyword);
  };

  const filteredActiveNotes = activeNotes.filter((note) => {
    return note.title.toLowerCase().includes(keyword.toLowerCase());
  });
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
            Active notes
          </h2>
          <SearchBar keyword={keyword} keywordChange={onKeywordChangeHandler} />
        </div>
        {activeNotes.length > 0 ? (
          <NoteList
            notes={filteredActiveNotes}
            onDelete={onDeleteHandler}
            onArchive={onArchiveHandler}
          />
        ) : (
          <p
            className={`text-center font-bold ${
              theme === "light" ? "text-tb" : "text-tw"
            }`}
          >
            Tidak ada catatan aktif
          </p>
        )}
      </div>
    </>
  );
}
