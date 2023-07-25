import { useState } from "react";

function App() {
  const [form, setForm] = useState({
    nome: "",
    email: "",
    senha: "",
    cep: "",
    rua: "",
    numero: "",
    bairro: "",
    cidade: "",
    estado: "",
  });

  const [response, setResponse] = useState(null);

  function handleSubmit(event) {
    event.preventDefault();
    fetch("https://ranekapi.origamid.dev/json/api/usuario", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    }).then((response) => {
      setResponse(response);
    });
  }

  function handleChange({ target }) {
    const { id, value } = target;
    setForm({ ...form, [id]: value });
    console.log(id, value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="nome">Nome</label>
      <input onChange={handleChange} type="text" value={form.nome} id="nome" />
      <label htmlFor="email">Email</label>
      <input
        onChange={handleChange}
        type="text"
        value={form.email}
        id="email"
      />
      <label htmlFor="senha">Senha</label>
      <input
        onChange={handleChange}
        type="password"
        value={form.senha}
        id="senha"
      />
      <label htmlFor="cep">Cep</label>
      <input onChange={handleChange} type="text" value={form.cep} id="cep" />
      <label htmlFor="rua">Rua</label>
      <input onChange={handleChange} type="text" value={form.rua} id="rua" />
      <label htmlFor="numero">Numero</label>
      <input
        onChange={handleChange}
        type="text"
        value={form.numero}
        id="numero"
      />
      <label htmlFor="bairro">Bairro</label>
      <input
        onChange={handleChange}
        type="text"
        value={form.bairro}
        id="bairro"
      />
      <label htmlFor="cidade">Cidade</label>
      <input
        onChange={handleChange}
        type="text"
        value={form.cidade}
        id="cidade"
      />
      <label htmlFor="estado">Estado</label>
      <input
        onChange={handleChange}
        type="text"
        value={form.estado}
        id="estado"
      />
      <button>Enviar</button>
      {response && response.ok && <p>Usuario criado.</p>}
    </form>
  );
}

export default App;
