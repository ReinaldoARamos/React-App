import React, { useState, useEffect } from "react";
import { Name } from "./components/Name";

function App() {
  const [nome, setNome] = useState("");
  const [idade, setIdade] = useState();

  // Use useEffect para definir os valores uma vez
  useEffect(() => {
    setNome("Perboles");
    setIdade(18);
  }, []);

  function handleChangeName() {
    const name = prompt("Insira seu nome");
    setIdade(name);
  }
  return (
    <div>
      <div>oi Migo tudo bom?</div>
      <Name aluno={nome} idade={idade} />
      <button onClick={handleChangeName}>Mudar nome</button>
    </div>
  );
}

export default App;
