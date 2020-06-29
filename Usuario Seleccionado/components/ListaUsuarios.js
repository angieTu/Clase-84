import React, { useContext } from "react";
import Usuario from "./Usuario";
import UsuariosContext from "../context/UsuariosContext";

const ListaUsuarios = () => {
  const { usuarios } = useContext(UsuariosContext);

  return (
    <>
      <ul>
        {usuarios.map((usuario, index) => (
          <Usuario
            key={index}
            id={usuario._id}
            name={usuario.name.first}
            lastname={usuario.name.last}
            company={usuario.company}
          ></Usuario>
        ))}
      </ul>
    </>
  );
};

export default ListaUsuarios;
