import React, { useEffect, useState } from "react";
import { getNote } from "../utils/network-data";
import NoteDetail from "../components/NoteDetail";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import ThemeContext from "../context/ThemeContext";

export default function NoteDetailPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [note, setNote] = useState();
  const { id } = useParams();
  const { theme } = React.useContext(ThemeContext);
  useEffect(() => {
    const getNoteDetail = async (id) => {
      const { data } = await getNote(id);
      setNote(data);
    };
    getNoteDetail(id);
    setIsLoading(false);
    return () => {
      setNote({});
    };
  }, [id]);

  if (isLoading) {
    return (
      <p
        className={`text-center h-screen font-bold ${
          theme === "light" ? "text-tb" : "text-tg"
        }`}
      >
        Loading note...
      </p>
    );
  }

  if (!note) {
    return (
      <p
        className={`mx-20 text-2xl font-bold text-center ${
          theme === "light" ? "text-tb" : "text-tg"
        }`}
      >
        Note is not found!
      </p>
    );
  }

  return (
    <>
      <Header />
      <section className="mx-20 mt-5 bg-cw rounded-lg">
        <NoteDetail {...note} />
      </section>
    </>
  );
}
