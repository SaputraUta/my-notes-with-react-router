import React from "react";
import { Route, Routes } from "react-router-dom";
import AddPage from "../pages/AddPage";
import ArchivedPage from "../pages/ArchivedPage";
import HomePage from "../pages/HomePage";
import NoteDetailPageWrapper from "../pages/NoteDetailPage";
import PageNotFound from "./PageNotFound";

export default function NoteApp() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/add" element={<AddPage />} />
        <Route path="/archived" element={<ArchivedPage />} />
        <Route path="/notes/:id" element={<NoteDetailPageWrapper />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}
