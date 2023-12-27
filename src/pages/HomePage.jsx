import React, { useState, useEffect } from "react";
import NoteList from "../components/NoteList";
import { useSearchParams } from "react-router-dom";
import SearchBar from "../components/SearchBar";
import { deleteNote, getActiveNotes, archiveNote } from "../utils/network-data";
import Header from "../components/Header";
import ThemeContext from "../context/ThemeContext";
import LocaleContext from "../context/LocaleContext";

export default function HomePage() {
  const [isLoading, setIsLoading] = useState(true);
  const [activeNotes, setActiveNotes] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get("keyword");
  const [keyword, setKeyword] = useState(search || "");
  const { theme } = React.useContext(ThemeContext);
  const { locale } = React.useContext(LocaleContext);

  useEffect(() => {
    getActiveNotes().then(({ data }) => {
      setActiveNotes(data);
      setIsLoading(false);
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
      <div className="mx-10 sm:mx-20">
        <div className="flex flex-col mt-5 sm:my-5 sm:flex-row sm:justify-between sm:items-center">
          <h2
            className={`font-semibold text-xl sm:text-2xl md:text-3xl ${
              theme === "light" ? "text-tb" : "text-tw"
            }`}
          >
            {locale === "id" ? "Notes aktif" : "Active notes"}
          </h2>
          <div className="mt-2 sm:mt-0">
            <SearchBar
              keyword={keyword}
              keywordChange={onKeywordChangeHandler}
            />
          </div>
        </div>
        {isLoading ? (
          <p
            className={`${
              theme === "light" ? "text-tb" : "text-tw"
            } font-medium text-base sm:text-lg md:text-xl`}
          >
            {locale === "id" ? "Memuat data..." : "Loading data..."}
          </p>
        ) : activeNotes.length > 0 ? (
          <NoteList
            notes={filteredActiveNotes}
            onDelete={onDeleteHandler}
            onArchive={onArchiveHandler}
          />
        ) : (
          <p
            className={`text-base sm:text-lg md:text-xl text-center font-bold ${
              theme === "light" ? "text-tb" : "text-tw"
            }`}
          >
            {locale === "id" ? "Tidak ada catatan aktif" : "No active note"}
          </p>
        )}
      </div>
    </>
  );
}
