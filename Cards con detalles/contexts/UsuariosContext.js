import React, { createContext, useState } from "react";
import datosUsuarios from "../components/datos-usuarios";

const UsuariosContext = createContext();

const UsuariosProvider = ({ children }) => {
  const [usuarios, setUsuarios] = useState(datosUsuarios);
  const [vista, setVista] = useState(true);

  const setVistaClick = () => setVista(!vista);

  return (
    <UsuariosContext.Provider
      value={{ usuarios, setUsuarios, vista, setVistaClick }}
    >
      {children}
    </UsuariosContext.Provider>
  );
};

export default UsuariosContext;
export { UsuariosProvider };
