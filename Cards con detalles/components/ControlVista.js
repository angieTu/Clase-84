import React, { useContext } from "react";
import UsuariosContext from "../contexts/UsuariosContext";

const ControlVista = () => {
  const { setVistaClick, vista } = useContext(UsuariosContext);

  return (
    <button onClick={setVistaClick}>
      {vista ? "Mostrar Detalles" : "Mostrar Resúmen"}
    </button>
  );
};

export default ControlVista;
