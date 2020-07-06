import React, { useContext } from "react";
import TagsContext from "../contexts/TagsContext";

const TagControl = ({ children }) => {
  const { tagsSelected, deleteClick } = useContext(TagsContext);
  const cantidad = tagsSelected.length;
  return (
    <>
      <span>{cantidad}</span>
      <button onClick={deleteClick}>CLEAR</button>
    </>
  );
};

export default TagControl;
