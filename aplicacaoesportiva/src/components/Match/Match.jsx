import './Match.css'

function Match() {
    return (
       
        <div class="row"><link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous"></link>

        <div class="col-3 mx-auto">
          <div class="card shadow">
            <div class="card-body d-flex flex-column">
                <h6 class="text-center">21:30</h6>
                <h6 class="text-center">09/11/2022</h6>
              <div class="times text-center mx-auto d-flex">
                <div class="time1">
                    <img class="logo-time" src="https://logodetimes.com/times/selecao-brasileira-brasil/logo-selecao-brasileira-brasil-2048.png" alt="" />                   
                </div>
                    <span class="mx-auto my-auto">X</span>
                <div class="time1">
                    <img class="logo-time" src="https://logodetimes.com/times/selecao-brasileira-brasil/logo-selecao-brasileira-brasil-2048.png" alt="" />         
                </div>                
              </div>
              <div class="d-flex mt-2 mx-auto">
                <h6 class="mt-2">Brasil <span>5</span></h6>
                    <span class="my-auto mx-2">X</span>
                <h6 class="mt-2"><span>1</span> Brasil</h6>
              </div>              
            </div>
          </div>
        </div>
    </div>
    );
}

export default Match;