import React, { useState, useEffect } from "react";
import { Name } from "./components/Name";

function App() {
  const [nome, setNome] = useState("");
  const [idade, setIdade] = useState();
  const [email, setEmail] = useState();

  const [user, setUser] = useState({});
  /*
  // Use useEffect para definir os valores uma vez
  useEffect(() => {
    setNome("Perboles");
    setIdade(18);
  }, []);

  function handleChangeName(name) {
    name = prompt("Insira seu nome");
    setIdade(name);
  }
    */

  function handleRegister(params) {
   // eslint-disable-next-line no-restricted-globals
   event.preventDefault();

   setUser({
    name: nome,
    idade: idade,
    email: email
   })

  }
  return (
    <div>
      <div>oi Migo tudo bom?</div>
      <Name aluno={nome} idade={idade} /> <br />
    
      <div>
        <h1>Teste de formulário</h1>
        <form onSubmit={handleRegister}>
          <label>Nome:</label>
          <br />
          <input placeholder="Digite seu nome" value={nome} onChange={(e) => setNome(e.target.value) }></input>
          <br />
          <label>Email:</label>
          <br />
          <input placeholder="Digite seu email"  value={email} onChange={(e) => setEmail(e.target.value) }></input>
          <br />
          <label>Idade:</label>
          <br />
          <input placeholder="Digite sua idade"  value={idade} onChange={(e) => setIdade(e.target.value) }></input>
          <br />

          <button type="submit">Registrar</button>
        </form>

        <br/>

        <br/>

        <div>
            <span>Bem vindo {user.name}</span> <br />
            <span>idade: {user.idade}</span><br />
            <span>Email: {user.email}</span><br />
        </div>
      </div>
    </div>
  );
}

export default App;
