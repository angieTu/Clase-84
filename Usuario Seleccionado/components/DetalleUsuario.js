import React, { useContext } from "react";
import UsuariosContext from "../context/UsuariosContext";

const DetalleUsuario = () => {
  const { usuario } = useContext(UsuariosContext);
  console.log(usuario);
  return (
    <>
      <p>Edad: {usuario.age}</p>
      <p>Email: {usuario.email}</p>
      <p>Teléfono: {usuario.phone}</p>
      <p>Dirección: {usuario.address}</p>
    </>
  );
};

export default DetalleUsuario;
