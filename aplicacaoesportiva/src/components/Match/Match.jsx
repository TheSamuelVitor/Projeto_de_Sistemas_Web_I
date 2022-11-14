import './Match.css'

function Match() {
    return (            
        <div className="col-3 mx-auto">
          <div className="card shadow">
            <div className="card-body d-flex flex-column">
                <h6 className="text-center">21:30</h6>
                <h6 className="text-center">09/11/2022</h6>
              <div className="times text-center mx-auto d-flex">
                <div className="time1">
                    <img className="logo-time" src="https://logodetimes.com/times/selecao-brasileira-brasil/logo-selecao-brasileira-brasil-2048.png" alt="" />                   
                </div>
                    <span className="mx-auto my-auto">X</span>
                <div className="time1">
                    <img className="logo-time" src="https://logodetimes.com/times/selecao-brasileira-brasil/logo-selecao-brasileira-brasil-2048.png" alt="" />         
                </div>                
              </div>
              <div className="d-flex mt-2 mx-auto">
                <h6 className="mt-2">Brasil <span>5</span></h6>
                    <span className="my-auto mx-2">X</span>
                <h6 className="mt-2"><span>1</span> Brasil</h6>
              </div>              
            </div>
          </div>
        </div>   
    );
}

export default Match;