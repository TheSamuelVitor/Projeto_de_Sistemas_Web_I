import client from "./api/connection";
import "./App.css";
import Titulo from "./components/titulo";


function App() {

  const campeonatos = []

  client.get("v1/campeonatos").then(
    (response) => {
      campeonatos.push(response.data)
      console.log(response.data)
    }
  )

  console.log(campeonatos)
  return (
    <div className="App">
      <header className="App-header">
        <Titulo></Titulo>
      </header>
    </div>
  );
}

export default App;
