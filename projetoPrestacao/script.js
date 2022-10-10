var qtdprestacao = document.getElementById("qtdPrestacao");
var valor = document.getElementById("valor");
var divPrestacoes = document.getElementById("prestacoes")
var mensagem = document.getElementById("mensagem")

if (qtdprestacao.value > 5) {
  console.log(qtdprestacao.value)
  mensagem.innerText = "Aviso! Quantidade de prestacoes excedendo 5"
}

function calcula() {
  console.log(qtdprestacao.value)
  console.log(valor.value)

  for (let index = 0; index < qtdprestacao.value; index++) {
    const prestacao = document.createElement("p")
    prestacao.innerText = `Parcelas no valor de ${(valor.value/qtdprestacao.value).toFixed(2)}`
    document.body.appendChild(prestacao)
  }
}
