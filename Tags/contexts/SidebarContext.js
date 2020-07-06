import React, { createContext, useState } from "react";

const SidebarContext = createContext();

const SidebarProvider = ({ children }) => {
  const [visible, setVisible] = useState(false);
  const setVisibleClick = () => setVisible(!visible);

  return (
    <SidebarContext.Provider value={{ visible, setVisible, setVisibleClick }}>
      {children}
    </SidebarContext.Provider>
  );
};

export default SidebarContext;
export { SidebarProvider };
