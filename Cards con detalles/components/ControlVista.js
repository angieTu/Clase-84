import React, { useContext } from "react";
import UsuariosContext from "../contexts/UsuariosContext";

const ControlVista = () => {
  const { handleClick, vista } = useContext(UsuariosContext);

  return (
    <button onClick={handleClick}>
      {vista ? "Mostrar Detalles" : "Mostrar Resúmen"}
    </button>
  );
};

export default ControlVista;
