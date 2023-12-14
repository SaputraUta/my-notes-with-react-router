import React from "react";
import { getNote } from "../utils/local-data";
import NoteDetail from "../components/NoteDetail";
import { useParams } from "react-router-dom";
import PropTypes from "prop-types";
import Header from "../components/Header";
import Navigation from "../components/Navigation";

export default function NoteDetailPageWrapper() {
  const { id } = useParams();
  return <NoteDetailPage id={id} />;
}

class NoteDetailPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      note: getNote(props.id),
    };
  }

  render() {
    if (this.state.note === undefined) {
      return (
        <p className="mx-20 mt-5 font-bold text-center">Note is not found!</p>
      );
    }

    return (
      <>
        <Header />
        <Navigation />
        <section className="mx-20 mt-5 bg-cw">
          <NoteDetail {...this.state.note} />
        </section>
      </>
    );
  }
}

NoteDetailPage.propTypes = {
  id: PropTypes.string.isRequired,
};
