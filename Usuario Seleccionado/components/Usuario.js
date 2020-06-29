import React, { useContext } from "react";
import UsuariosContext from "../context/UsuariosContext";

const Usuario = ({ name, lastname, company, id }) => {
  const { handleUsuarioSelected } = useContext(UsuariosContext);

  const handleClick = () => handleUsuarioSelected(id);

  return (
    <div style={{ display: "flex" }} onClick={handleClick}>
      <p>Nombre:{name} </p>
      <p>Apellido:{lastname} </p>
      <p>Compañía:{company} </p>
    </div>
  );
};

export default Usuario;
