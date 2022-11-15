import './Championships.css'

function Championships() {
    return (
        <div className="row">
          <div className="col-5 mx-auto">
            <div className="card shadow ">
                <div className="card-body flex-column text-center =">
                    <h6 className="fw-bold mt-2">Campeonato Brasileiro</h6>                         
                    <img className="logo-time my-4" src="https://api.api-futebol.com.br/images/competicao/brasileiro-seriea.png" alt="" />                                                
                <div className="mt-2 mx-auto text-center">
                    <h7 className="mt-2">38° Rodada</h7>
                </div>              
                </div>
            </div>
          </div>
          <div className="col-5 mx-auto">
            <div className="card shadow">
                <div className="card-body flex-column text-center">
                    <h6 className="fw-bold mt-2">Copa do Brasil</h6>                                
                    <img className="logo-time my-4" src="https://api.api-futebol.com.br/images/competicao/copa-do-brasil.png" alt="" />                                                       
                <div className="mt-2 mx-auto text-center">
                    <h7 className="mt-2">38° Rodada</h7>
                </div>              
                </div>
            </div>
          </div>
        </div>
    );
}

export default Championships;