import client from "./api/connection";
import "./App.css";
import Titulo from "./components/titulo";

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <Titulo></Titulo>
      </header>
    </div>
  );
}

export default App;
