import React, { useContext } from "react";
import SidebarContext from "../contexts/SidebarContext";

const Filters = ({ children }) => {
  const { visible, setVisibleClick } = useContext(SidebarContext);

  return (
    <>
      <button onClick={setVisibleClick}>{visible ? "X" : "SIDEBAR"}</button>
      {children}
    </>
  );
};

export default Filters;
