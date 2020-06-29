import React, { useState, createContext } from "react";
import datosUsuarios from "../components/datos-usuarios";

const UsuariosContext = createContext();

const UsuariosProvider = ({ children }) => {
  const [usuarios, setUsuarios] = useState(datosUsuarios);
  const [usuario, setUsuario] = useState({});

  const handleUsuarioSelected = (id) => {
    const usuarioSelected = usuarios.find((usuario) => usuario._id === id);
    setUsuario(usuarioSelected);
  };

  return (
    <UsuariosContext.Provider
      value={{
        usuarios,
        setUsuarios,
        usuario,
        setUsuario,
        handleUsuarioSelected,
      }}
    >
      {children}
    </UsuariosContext.Provider>
  );
};

export default UsuariosContext;
export { UsuariosProvider };
