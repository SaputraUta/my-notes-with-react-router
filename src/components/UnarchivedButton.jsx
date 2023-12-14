import React from "react";
import PropTypes from "prop-types";
import { RiInboxUnarchiveFill } from "react-icons/ri";

export default function UnarchivedButton({ id, onUnarchive }) {
  return (
    <button onClick={() => onUnarchive(id)}>
      <RiInboxUnarchiveFill size={25} />
    </button>
  );
}

UnarchivedButton.propTypes = {
  onUnarchive: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
};
