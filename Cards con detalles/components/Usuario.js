import React, { useContext } from "react";
import UsuariosContext from "../contexts/UsuariosContext";

const Usuario = ({ name, lastname, company, age, email, phone, address }) => {
  const { vista } = useContext(UsuariosContext);

  return (
    <div style={{ display: "flex", justifyContent: "space-around" }}>
      <p>
        Nombre y Apellido: {name} {lastname}
      </p>
      <p>Compañia: {company}</p>
      {!vista && (
        <>
          <p>Edad: {age}</p>
          <p>Email: {email}</p>
          <p>Teléfono: {phone}</p>
          <p>Dirección: {address}</p>
        </>
      )}
    </div>
  );
};

export default Usuario;
