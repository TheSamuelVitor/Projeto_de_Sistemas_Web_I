import "./Championships.css";
import client from "../../api/connection";
import { useState } from "react";

function Championships() {
  const [campeonatos, setCampeonatos] = useState('')

  client.get("v1/campeonatos").then((response) => {
    console.log(response.data)
    setCampeonatos(response.data.nome)
  });

  return (
    <div className="row">
      <div className="col-5 mx-auto">
        <div className="card shadow ">
          <div className="card-body flex-column text-center =">
            {campeonatos}
            <img
              className="logo-time my-4"
              src="https://api.api-futebol.com.br/images/competicao/brasileiro-seriea.png"
              alt=""
            />
            <div className="mt-2 mx-auto text-center">
              38° Rodada
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Championships;
