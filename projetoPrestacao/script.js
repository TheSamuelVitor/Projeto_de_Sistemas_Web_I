var divPrestacoes = document.getElementById("prestacoes");
var mensagem = document.getElementById("mensagem");
var botao = document.getElementById("calcula");

botao.addEventListener("click", (e) => {
  
  var qtdprestacao = parseInt(document.getElementById("qtdPrestacao").value);
  var valor = parseFloat(document.getElementById("valor").value);
  divPrestacoes.innerText = "";
  
  if (qtdprestacao >= 5) {
    valor = valor + valor * 0.1;
    mensagem.innerText = `Aviso! Como a quantidade de prestacoes é maior que 5
      O produto sofrerá um aumento de 10%`;
  }

  e.preventDefault();
  for (let index = 1; index <= qtdprestacao; index++) {
    textoAnterior = divPrestacoes.innerText;
    divPrestacoes.innerText =
    textoAnterior +
      `${index}° Parcela no valor de ${(valor / qtdprestacao).toFixed(2)}\n`;
  }
});
