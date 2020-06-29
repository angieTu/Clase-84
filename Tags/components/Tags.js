import React, { useContext } from "react";
import TagsContext from "../contexts/TagsContext";
import Tag from "./Tag";
import style from "./tags.module.scss";

const Tags = () => {
  const { tags } = useContext(TagsContext);

  return (
    <ul className={style.tagList}>
      {tags.map((tag, index) => (
        <Tag id={index} key={index} status={tag.status}>
          {tag.title}
        </Tag>
      ))}
    </ul>
  );
};

export default Tags;
