import React from "react";
import {
  getArchivedNotes,
  deleteNote,
  unarchiveNote,
} from "../utils/local-data";
import NoteList from "../components/NoteList";
import { useSearchParams } from "react-router-dom";
import SearchBar from "../components/SearchBar";
import Header from "../components/Header";
import Navigation from "../components/Navigation";
import PropTypes from "prop-types";

export default function ArchivedPageWrapper() {
  const [searchParams, setSearchParams] = useSearchParams();
  const keyword = searchParams.get("keyword");
  function changeSearchParams(keyword) {
    setSearchParams({ keyword });
  }
  return (
    <ArchivedPage defaultKeyword={keyword} keywordChange={changeSearchParams} />
  );
}

class ArchivedPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      archivedNotes: getArchivedNotes(),
      keyword: props.defaultKeyword || "",
    };
    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onUnarchiveHandler = this.onUnarchiveHandler.bind(this);
    this.onKeywordChangeHandler = this.onKeywordChangeHandler.bind(this);
  }

  onDeleteHandler(id) {
    deleteNote(id);
    this.setState(() => {
      return {
        archivedNotes: getArchivedNotes(),
      };
    });
  }

  onUnarchiveHandler(id) {
    unarchiveNote(id);
    this.setState(() => {
      return {
        archivedNotes: getArchivedNotes(),
      };
    });
  }

  onKeywordChangeHandler(keyword) {
    this.setState(() => {
      return {
        keyword,
      };
    });
    this.props.keywordChange(keyword);
  }

  render() {
    const filteredArchivedNotes = this.state.archivedNotes.filter((note) => {
      return note.title
        .toLowerCase()
        .includes(this.state.keyword.toLowerCase());
    });
    return (
      <>
        <Header />
        <Navigation />
        <div className="mx-20">
          <div className="flex justify-between items-center">
            <h2 className="font-semibold text-3xl text-slate-800 my-5">
              Archived notes
            </h2>
            <SearchBar
              keyword={this.state.keyword}
              keywordChange={this.onKeywordChangeHandler}
            />
          </div>
          {this.state.archivedNotes.length > 0 ? (
            <NoteList
              notes={filteredArchivedNotes}
              onDelete={this.onDeleteHandler}
              onArchive={this.onUnarchiveHandler}
            />
          ) : (
            <p className="text-center font-bold text-xl">
              Tidak ada catatan arsip
            </p>
          )}
        </div>
      </>
    );
  }
}

ArchivedPage.propTypes = {
  keyword: PropTypes.string,
  keywordChange: PropTypes.func.isRequired,
};
