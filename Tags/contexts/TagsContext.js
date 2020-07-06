import React, { createContext, useState } from "react";
import tagsArray from "../tagsArray";

const TagsContext = createContext();

const newTags = tagsArray.sort().map((tagArray) => ({
  title: tagArray,
  status: "unselected",
}));

const TagsProvider = ({ children }) => {
  const [tags, setTags] = useState(newTags);
  const [tagsSelected, setTagsSelected] = useState([]);

  const setTagsSelectedClick = (id) => {
    const selectedTag = tags.find((tag) => tags.indexOf(tag) === id).title;
    const existe = tagsSelected.includes(selectedTag);
    if (!existe) {
      setTagsSelected([...tagsSelected, selectedTag]);
    } else {
      const newArray = tagsSelected.filter(
        (tagSelected) => tagSelected !== selectedTag
      );
      setTagsSelected([...newArray]);
    }
  };

  const setTagSelectedChange = (id) => {
    const tagSelected = tags.find((tag) => tags.indexOf(tag) === id);
    const newStatus =
      tagSelected.status === "unselected" ? "selected" : "unselected";
    const newTag = { ...tagSelected, status: newStatus };
    const newTags = tags.map((tag) =>
      tags.indexOf(tag) === id ? newTag : tag
    );
    setTags([...newTags]);
  };

  const onClickTag = (id) => {
    setTagsSelectedClick(id);
    setTagSelectedChange(id);
  };

  const deleteClick = () => {
    const newTags = tags.map((tag) => ({
      title: tag.title,
      status: "unselected",
    }));
    setTags([...newTags]);
    setTagsSelected([]);
  };

  return (
    <TagsContext.Provider
      value={{
        tags,
        tagsSelected,
        onClickTag,
        deleteClick,
      }}
    >
      {children}
    </TagsContext.Provider>
  );
};

export default TagsContext;
export { TagsProvider };
