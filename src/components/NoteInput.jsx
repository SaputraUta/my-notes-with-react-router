import React, { useState } from "react";
import PropTypes from "prop-types";
import ThemeContext from "../context/ThemeContext";

function NoteInput({ addNote }) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const { theme } = React.useContext(ThemeContext);

  const onTitleChangeHandler = (event) => {
    setTitle(event.target.innerHTML);
  };

  const onBodyChangeHandler = (event) => {
    setBody(event.target.innerHTML);
  };

  const onSubmitEventHandler = (event) => {
    event.preventDefault();
    addNote({ title, body });
  };

  return (
    <form
      onSubmit={onSubmitEventHandler}
      className="w-full flex flex-col gap-2 relative"
    >
      <div
        onInput={onTitleChangeHandler}
        className={`w-full border-2 p-2 ${
          theme === "light" ? "border-bb" : "border-bg text-tg"
        }`}
        contentEditable
      />
      <span
        className={`absolute top-3 left-2 font-medium text-sm opacity-75 ${
          theme === "light" ? "text-tb" : "text-tg"
        }  ${title ? "hidden" : ""}`}
      >
        Title
      </span>
      <div
        onInput={onBodyChangeHandler}
        className={`w-full border-2 p-2 h-32 ${
          theme === "light" ? "border-bb" : "border-bg text-tg"
        }`}
        contentEditable
      />
      <span
        className={`absolute top-16 left-2 text-sm font-medium opacity-75 ${
          theme === "light" ? "text-tb" : "text-tg"
        } ${
          body ? "hidden" : ""
        }`}
      >
        Body
      </span>
      <button
        type="Submit"
        className={`w-full rounded-lg font-bold tracking-widest p-2 ${theme==="light" ? "bg-cb text-tw" : "bg-cw text-tb"}`}
      >
        Add
      </button>
    </form>
  );
}

NoteInput.propTypes = {
  addNote: PropTypes.func.isRequired,
};

export default NoteInput;
