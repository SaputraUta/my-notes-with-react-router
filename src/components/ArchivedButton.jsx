import React from "react";
import PropTypes from "prop-types";
import { RiInboxArchiveFill } from "react-icons/ri";

export default function ArchivedButton({ id, onArchive }) {
  return (
    <button onClick={() => onArchive(id)}>
      <RiInboxArchiveFill size={25} />
    </button>
  );
}

ArchivedButton.propTypes = {
  onArchive: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
};
