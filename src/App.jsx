import "./App.css";
import React, {useState} from "react";

function App() {

  const [lista, setLista  ] = useState([
    "Queijo",
    "Leite",
    "Pão",
    "Coca"
  ]);
function adicionar(event){
  event.preventDefault();
  const valor = document.getElementById("item").value;
  setLista([...lista, valor]);
  document.getElementById("item").value="";
}
  return (
    <div className="App">
      <header>
        <h2>Lista de Comprais:</h2>
      </header>
      <div className="lista-compras-container">
        <ul className="lista-items">
          {lista.map(item => <li>{item}</li>)}
        </ul>
      </div>
      <form className="form-add-item" action="#" method="post">
        <fieldset>
          <div className="form-group mb-3">
    
            <label htmlFor="item">Adicionar Novo Item na Lista:</label>
            <input type="text" className="form-control" id="item" />
          </div>
          <button type="submit" className="btn btn-primary" onClick={adicionar} >
            Adicionar
          </button>
        </fieldset>
      </form>
    </div>
  );
}

export default App;
