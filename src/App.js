import React from "react";
import { useState } from "react";
import Input from "./components/Input";
import Boton from "./components/Boton";

function App() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="App">
      <h1>Estado de los componentes</h1>
      <Input name={[name, setName]} password={[password, setPassword]} />
      {password === "252525" ? <Boton /> : null}
    </div>
  );
}

export default App;
