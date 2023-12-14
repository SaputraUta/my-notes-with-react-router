import React from "react";
import PropTypes from "prop-types";

class NoteInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: "",
    };
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
    this.onTitleChangeHandler = this.onTitleChangeHandler.bind(this);
    this.onBodyChangeHandler = this.onBodyChangeHandler.bind(this);
  }

  onTitleChangeHandler(event) {
    this.setState(() => {
      return {
        title: event.target.innerHTML,
      };
    });
  }

  onBodyChangeHandler(event) {
    this.setState(() => {
      return {
        body: event.target.innerHTML,
      };
    });
  }

  onSubmitEventHandler(event) {
    event.preventDefault();
    this.props.addNote(this.state);
    console.log(this.state);
  }
  render() {
    return (
      <form
        onSubmit={this.onSubmitEventHandler}
        className="w-full flex flex-col gap-2 relative"
      >
        <div
          onInput={this.onTitleChangeHandler}
          className="w-full border-2 border-bb p-2"
          contentEditable
        />
        <span
          className={`absolute top-3 left-2 font-medium text-sm text-tb opacity-75 ${
            this.state.title ? "hidden" : ""
          }`}
        >
          Title
        </span>
        <div
          onInput={this.onBodyChangeHandler}
          className="w-full border-2 border-bb p-2 h-32"
          contentEditable
        />
        <span
          className={`absolute top-16 left-2 text-sm font-medium text-tb opacity-75 ${
            this.state.body ? "hidden" : ""
          }`}
        >
          Body
        </span>
        <button
          type="Submit"
          className="w-full rounded-lg bg-cb p-2 text-tw font-bold tracking-widest"
        >
          Add
        </button>
      </form>
    );
  }
}

NoteInput.propTypes = {
  addNote: PropTypes.func.isRequired,
};

export default NoteInput;
