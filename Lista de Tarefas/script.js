var count = 0;

function adicionarTarefa() {
  var tarefa = document.getElementById("tarefa").value;
  if (tarefa === null || tarefa === "") {
    alert("Insira o nome da tarefa!");
  } else {
    var novaDiv = document.createElement("div");
    novaDiv.appendChild(document.createTextNode(tarefa));
    document.getElementById("tarefas").appendChild(novaDiv);
    count++;
    document.getElementById("pendentes").innerHTML =
      count + " Tarefas Pendentes";
  }
}

function limparTarefa() {
  var div = document.getElementById("tarefas");
  while (div.firstChild) {
    div.removeChild(div.firstChild);
  }
  alert("Tarefas limpas com sucesso!");
  count = 0;
  document.getElementById("pendentes").innerHTML = "Tarefas Pendentes";
}
