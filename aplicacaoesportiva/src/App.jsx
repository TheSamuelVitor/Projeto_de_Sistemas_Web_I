import "./App.css"
import Matches from "./pages/Matches"
import Home from "./pages/Home"
import Header from "./components/Header/Header"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

function App() {
  return (
    <Router className="App container">
      <Header />
      <main className="container pb-5">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/matches" element={<Matches />} />
        </Routes>  
      </main>    

      <footer className="mt-5 text-center">
        Desenvolvido por: <br></br>
        Michele Araujo <br></br>
        Rafael Carvalho  <br></br>
        Samuel Vitor 
      </footer>
    </Router>
  );
}

export default App;
