import React, { useContext } from "react";
import SidebarContext from "../contexts/SidebarContext";
import style from "./tags.module.scss";

const Sidebar = ({ children }) => {
  const { visible } = useContext(SidebarContext);

  return (
    <div className={style[visible ? "mostrar" : "ocultar"]}>{children}</div>
  );
};

export default Sidebar;
