import React from "react";
import ControlUsuario from "./components/ControlUsuario";
import DetalleUsuario from "./components/DetalleUsuario";
import ListaUsuarios from "./components/ListaUsuarios";
import { UsuariosProvider } from "./context/UsuariosContext";

function App() {
  return (
    <div className="App">
      <UsuariosProvider>
        <ControlUsuario>
          <DetalleUsuario />
        </ControlUsuario>
        <ListaUsuarios />
      </UsuariosProvider>
    </div>
  );
}

export default App;
