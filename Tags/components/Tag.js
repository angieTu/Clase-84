import React, { useContext } from "react";
import TagsContext from "../contexts/TagsContext";
import style from "./tags.module.scss";

const Tag = ({ id, children, status }) => {
  const { onClickTag } = useContext(TagsContext);

  const handleClick = () => onClickTag(id);

  return (
    <li onClick={handleClick} className={`${style.tagItem} ${style[status]}`}>
      {children}
    </li>
  );
};

export default Tag;
