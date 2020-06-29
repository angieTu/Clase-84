import React from "react";
import ControlVista from "./components/ControlVista";
import ListaUsuarios from "./components/ListaUsuarios";
import { UsuariosProvider } from "./contexts/UsuariosContext";

function App() {
  return (
    <div className="App">
      <UsuariosProvider>
        <ControlVista />
        <ListaUsuarios />
      </UsuariosProvider>
    </div>
  );
}

export default App;
