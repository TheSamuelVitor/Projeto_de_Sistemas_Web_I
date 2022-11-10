import "./App.css";
import Titulo from "./components/teste.js";
import Match from "./components/Match/Match";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Titulo></Titulo>
      </header>

      <Match />
    </div>
  );
}

export default App;
