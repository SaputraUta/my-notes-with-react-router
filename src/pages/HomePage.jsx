import React from "react";
import NoteList from "../components/NoteList";
import { getActiveNotes, deleteNote, archiveNote } from "../utils/local-data";
import { useSearchParams } from "react-router-dom";
import SearchBar from "../components/SearchBar";
import PropTypes from "prop-types";
import Header from "../components/Header";
import Navigation from "../components/Navigation";

export default function HomePageWrapper() {
  const [searhParams, setSearchParams] = useSearchParams();
  const keyword = searhParams.get("keyword");
  function changeSearchParams(keyword) {
    setSearchParams({ keyword });
  }
  return (
    <HomePage defaultKeyword={keyword} keywordChange={changeSearchParams} />
  );
}

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeNotes: getActiveNotes(),
      keyword: props.defaultKeyword || "",
    };
    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onArchiveHandler = this.onArchiveHandler.bind(this);
    this.onKeywordChangeHandler = this.onKeywordChangeHandler.bind(this);
  }

  onDeleteHandler(id) {
    deleteNote(id);
    this.setState(() => {
      return {
        activeNotes: getActiveNotes(),
      };
    });
  }

  onArchiveHandler(id) {
    archiveNote(id);
    this.setState(() => {
      return {
        activeNotes: getActiveNotes(),
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
    const filteredActiveNotes = this.state.activeNotes.filter((note) => {
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
            <h2 className="font-semibold text-3xl text-tb my-5">
              Active notes
            </h2>
            <SearchBar
              keyword={this.state.keyword}
              keywordChange={this.onKeywordChangeHandler}
            />
          </div>
          {this.state.activeNotes.length > 0 ? (
            <NoteList
              notes={filteredActiveNotes}
              onDelete={this.onDeleteHandler}
              onArchive={this.onArchiveHandler}
            />
          ) : (
            <p className="text-center font-bold text-xl text-tb">
              Tidak ada catatan aktif
            </p>
          )}
        </div>
      </>
    );
  }
}

HomePage.propTypes = {
  keyword: PropTypes.string,
  keywordChange: PropTypes.func.isRequired,
};
