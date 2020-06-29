import React, { useContext } from "react";
import TagsContext from "../contexts/TagsContext";

const Filter = ({ children }) => {
  const { visible } = useContext(TagsContext);
  return (
    <>
      {!visible ? <button>SIDEBAR</button> : <button>X</button>}

      {children}
    </>
  );
};

export default Filter;
