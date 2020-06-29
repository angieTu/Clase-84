import React, { useContext } from "react";
import TagsContext from "../contexts/TagsContext";

const TagControl = ({ children }) => {
  const { tagsSelected, handleDeleteClick } = useContext(TagsContext);
  const cantidad = tagsSelected.length;
  return (
    <>
      <span>{cantidad}</span>
      <button onClick={handleDeleteClick}>CLEAR</button>
    </>
  );
};

export default TagControl;
