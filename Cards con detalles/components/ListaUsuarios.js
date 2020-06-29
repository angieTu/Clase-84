import React, { useContext } from "react";
import Usuario from "./Usuario";
import UsuariosContext from "../contexts/UsuariosContext";

const ListaUsuarios = () => {
  const { usuarios } = useContext(UsuariosContext);
  return (
    <>
      {usuarios.map((usuario, index) => (
        <Usuario
          key={index}
          id={usuario._id}
          name={usuario.name.first}
          lastname={usuario.name.last}
          company={usuario.company}
          age={usuario.age}
          email={usuario.email}
          phone={usuario.phone}
          address={usuario.address}
        ></Usuario>
      ))}
    </>
  );
};

export default ListaUsuarios;
