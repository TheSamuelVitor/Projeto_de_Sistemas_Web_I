var qtdprestacao = document.getElementById("qtdPrestacao");
var valor = document.getElementById("valor");
var divPrestacoes = document.getElementById("prestacoes")

function calcula() {
  console.log(qtdprestacao.value)
  console.log(valor.value)

  for (let index = 0; index < qtdprestacao.value; index++) {
    const prestacao = document.createElement("p")
    prestacao.innerText = `${qtdprestacao.value} Parcelas no valor de ${(valor.value/qtdprestacao.value).toFixed(2)}`
    document.body.appendChild(prestacao)
  }
}
