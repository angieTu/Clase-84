import React, { useContext } from "react";
import TagsContext from "../contexts/TagsContext";

const SelectedTags = () => {
  const { tagsSelected } = useContext(TagsContext);
  return (
    <ul>
      {tagsSelected.map((tagSelected, index) => (
        <li key={index}>{tagSelected}</li>
      ))}
    </ul>
  );
};

export default SelectedTags;
