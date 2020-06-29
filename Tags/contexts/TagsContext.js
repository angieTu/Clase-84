import React, { createContext, useState } from "react";
import tagsArray from "../tagsArray";

const TagsContext = createContext();

const TagsProvider = ({ children }) => {
  const newTags = tagsArray.map((tagArray) => ({
    title: tagArray,
    status: "unselected",
  }));

  const [tags, setTags] = useState(newTags);
  const [tagsSelected, setTagsSelected] = useState([]);
  const [visible, setVisible] = useState(false);

  const handleTagSelectedClick = (id) => {
    const selectedTag = tags.find((tag) => tags.indexOf(tag) === id).title;

    setTagsSelected([...tagsSelected, selectedTag]);

    // for (let i = 0; i < tagsSelected.length; i++) {
    //   if (selectedTag === tagsSelected[i]) {
    //     const updateTags = [];
    //     updateTags.push(tagsSelected[i] !== selectedTag);
    // const updateTags = tagsSelected.filter(
    //   (tagSelected) => tagSelected !== selectedTag
    // );
    // setTagsSelected([...updateTags]);
    // }
    // else if (selectedTag !== tagsSelected[i]) {
    //   setTagsSelected([...tagsSelected, selectedTag]);
    // }
    // }
  };

  const handleTagSelectedChange = (id) => {
    const tagSelected = tags.find((tag) => tags.indexOf(tag) === id);
    const newStatus =
      tagSelected.status === "unselected" ? "selected" : "unselected";
    const newTag = { ...tagSelected, status: newStatus };
    const newTags = tags.map((tag) =>
      tags.indexOf(tag) === id ? newTag : tag
    );
    setTags([...newTags]);
  };

  const handleDeleteClick = () => {
    for (let i = 0; i < tags.length; i++) {
      tags[i].status = "unselected";
    }
    setTagsSelected([]);
  };

  return (
    <TagsContext.Provider
      value={{
        tags,
        handleTagSelectedClick,
        tagsSelected,
        handleTagSelectedChange,
        handleDeleteClick,
        visible,
      }}
    >
      {children}
    </TagsContext.Provider>
  );
};

export default TagsContext;
export { TagsProvider };
