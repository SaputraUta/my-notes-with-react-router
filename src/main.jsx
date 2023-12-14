import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import { BrowserRouter } from "react-router-dom";
import NoteApp from "./components/NoteApp";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <NoteApp />
  </BrowserRouter>
);
