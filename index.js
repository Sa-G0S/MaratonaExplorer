const respostaElement = document.querySelector('#resposta')

const buttonPerguntar = document.querySelector('#buttonPerguntar')

const inputPergunta = document.querySelector('#inputPergunta')

const respostas = [
  'Com certeza, sim!',
  'Não tenho tanta certeza.',
  'É decididamente não!',
  'Não conte com isso.',
  'Tenho minhas dúvidas!',
  'Agora não quero responder, pergunte novamente mais tarde.',
  'Não se precipite, ninguém toma o que é seu!',
  'Absolutamente não.',
  'Você pode contar com isso.',
  'Melhor não te dizer agora.',
  'Você já sabe a resposta, nem precisava ter me acordado pra isso.',
  'Talvez... Continue acreditando.',
  'O destino ainda não se definiu, tenha paciência!.',
  'Não é possível prever agora.',
  'As chances são boas.',
  'As perspectivas não são tão boas.',
  'Sim.',
  'Tenha certeza que você quer me perguntar isso??? Pensa melhor e pergunte novamente.',
  'Sinais apontam que sim.'
]
function fazerPergunta() {
  if (inputPergunta.value == '') {
    alert('Você não digitou sua pergunta, por favor, digite sua pergunta!')
    return
  }

  buttonPerguntar.setAttribute('disabled', true)

  const pergunta = '<div>' + inputPergunta.value + '</div>'

  const totalRespostas = respostas.length
  const sorteioResposta = Math.floor(Math.random() * totalRespostas)

  respostaElement.innerHTML = pergunta + respostas[sorteioResposta]

  respostaElement.style.opacity = 1;

  setTimeout(function () {
    respostaElement.style.opacity = 0
    buttonPerguntar.removeAttribute('disabled')
  }, 7000)
}
