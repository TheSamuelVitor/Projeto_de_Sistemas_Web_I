import client from "./api/connection";
import "./App.css";
import Titulo from "./components/titulo";

function App() {
  const campeonatos = [];

  client.get("v1/campeonatos").then((response) => {
    campeonatos.push(response.data);
  });

  return (
    <div className="App">
      <header className="App-header">
        <Titulo></Titulo>
      </header>
    </div>
  );
}

export default App;
