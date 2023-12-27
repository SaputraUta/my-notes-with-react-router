import React, { useEffect, useState } from "react";
import { getNote } from "../utils/network-data";
import NoteDetail from "../components/NoteDetail";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import ThemeContext from "../context/ThemeContext";
import LocaleContext from "../context/LocaleContext";

export default function NoteDetailPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [note, setNote] = useState();
  const { id } = useParams();
  const { theme } = React.useContext(ThemeContext);
  const { locale } = React.useContext(LocaleContext);
  useEffect(() => {
    setIsLoading(true);
    const getNoteDetail = async (id) => {
      const { data } = await getNote(id);
      setNote(data);
      setIsLoading(false);
    };
    getNoteDetail(id);
    return () => {
      setNote({});
    };
  }, [id]);

  if (isLoading) {
    return (
      <p
        className={`text-center mt-10 h-screen font-bold ${
          theme === "light" ? "text-tb" : "text-tg"
        }`}
      >
        {locale === "id" ? "Memuat note..." : "Loading note..."}
      </p>
    );
  }

  if (!note) {
    return (
      <p
        className={`mx-10 sm:mx-20 text-2xl font-bold text-center ${
          theme === "light" ? "text-tb" : "text-tg"
        }`}
      >
        {locale === "id" ? "Note tidak ditemukan!" : "Note is not found!"}
      </p>
    );
  }

  return (
    <>
      <Header />
      <section className="mx-10 sm:mx-20 mt-5 bg-cw rounded-lg">
        <NoteDetail {...note} />
      </section>
    </>
  );
}
