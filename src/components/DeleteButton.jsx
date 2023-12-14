import React from "react";
import PropTypes from "prop-types";
import { MdDelete } from "react-icons/md";

export default function DeleteButton({ id, onDelete }) {
  return <button onClick={() => onDelete(id)}><MdDelete size={25}/>
  </button>;
}

DeleteButton.propTypes = {
  onDelete: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
};
