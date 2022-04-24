let titulo     = document.querySelector('h1')
let instrucoes = document.querySelector('#instrucoes')
let aviso      = document.querySelector('#aviso')
let progresso  = document.querySelector('#progresso')
let pontos = 0 // pontos para o placar
let placar = 0 // placar

// AUDIO
let somAcerto   = document.querySelector('#somAcerto')
let somErro     = document.querySelector('#somErro')
let somAplausos = document.querySelector('#somAplausos')

// PERGUNTA
let numQuestao = document.querySelector('#numQuestao')
let imgQuestao = document.querySelector('.imagemDaQuestao img')  // ADICIONE
let pergunta   = document.querySelector('#pergunta')

// ALTERNATIVAS
let a = document.querySelector('#a')
let b = document.querySelector('#b')
let c = document.querySelector('#c')
let d = document.querySelector('#d')

// article com a class questoes
let articleQuestoes = document.querySelector('.questoes')
// ol li com as alternativas
let alternativas = document.querySelector('#alternativas')


const q0 = {
    numQuestao   : 0,
    imagem       : '0.png',  // ADICIONE
    pergunta     : "Pergunta",
    alternativaA : "Alternativa A",
    alternativaB : "Alternativa B",
    alternativaC : "Alternativa C",
    alternativaD : "Alternativa D",
    correta      : "0",
}
const q1 = {
    numQuestao   : 1,
    imagem       : '1.jpg',
    pergunta     : "No primeiro episódio,O Will joga o dado e cai...",
    alternativaA : "5",
    alternativaB : "2",
    alternativaC : "7",
    alternativaD : "6",
    correta      : "7",
}
const q2 = {
    numQuestao   : 2,
    imagem       : '2.jpg', 
    pergunta     : "Nome da atriz que interpreta onze em stranger things?",
    alternativaA : "silene",
    alternativaB : "Millie Bobby Brown",
    alternativaC : "jany foster",
    alternativaD : "jamylis",
    correta      : "Millie Bobby Brown",
}
const q3 = {
    numQuestao   : 3,
    imagem       : '3.jpg', 
    pergunta     : "Em que decada se passa stranger things?",
    alternativaA : "60",
    alternativaB : "70",
    alternativaC : "80",
    alternativaD : "90",
    correta      : "80",
}
const q4 = {
    numQuestao   : 4,
    imagem       : '4.jpg', 
    pergunta     : "Onde a série se passa?",
    alternativaA : "houston, texas",
    alternativaB : "Phoenix, Arizona",
    alternativaC : "Hawkins, Indiana",
    alternativaD : "Maranguapa, Ceará",
    correta      : "Hawkins, Indiana",
}
const q5 = {
    numQuestao   : 5,
    imagem       : '5.jpg',
    pergunta     : "Quem fica preso no mundo invertido na primeira temporada?",
    alternativaA : "Will",
    alternativaB : "Mike",
    alternativaC : "Lucas",
    alternativaD : "Onze",
    correta      : "Will",
}
const q6 = {
    numQuestao   : 6,
    imagem       : '6.jpg',
    pergunta     : "Qual jogo Will e seus amigos jogavam no dia em que ele foi pego?",
    alternativaA : "Free fire",
    alternativaB : "LOL",
    alternativaC : "Super Mario",
    alternativaD : "Dangeons & Dragons",
    correta      : "Dangeons & Dragons",
}
const q7 = {
    numQuestao   : 7,
    imagem       : '7.jpg',
    pergunta     : "Quais os poderes de eleven (onze)?",
    alternativaA : "invisibilidade",
    alternativaB : "telepatia",
    alternativaC : "olhos lazers",
    alternativaD : "super velocidade",
    correta      : "telepatia",
}
const q8 = {
    numQuestao   : 8,
    imagem       : '8.jpg',
    pergunta     : "Quais os criadores da série?",
    alternativaA : "irmãos Duffer",
    alternativaB : "Ednaldo Pereira",
    alternativaC : "Crescida Cowell",
    alternativaD : "Eric Kripke",
    correta      : "irmãos Duffer",
}
const q9 = {
    numQuestao   : 9,
    imagem       : '9.jpg',
    pergunta     : "Onde mike, Lucas e Dustin encontram Eleven pela primeira vez?",
    alternativaA : "No fliperama",
    alternativaB : "No lago",
    alternativaC : "Na escola",
    alternativaD : "Na floresta das trevas",
    correta      : "Na floresta das trevas",
}
const q10 = {
    numQuestao   : 10,
    imagem       : '10.jpg',
    pergunta     : "Qual música é cantada por Dustin e suzie?",
    alternativaA : "Ride",
    alternativaB : "Heat Waves",
    alternativaC : "The Never Ending Story",
    alternativaD : "Chop Suey",
    correta      : "The Never Ending Story",
}

// CONSTANTE COM UM ARRAY DE OBJETOS COM TODAS AS QUESTOES
const questoes = [q0, q1, q2, q3, q4, q5, q6, q7, q8, q9, q10]

let numero = document.querySelector('#numero')
let total  = document.querySelector('#total')

numero.textContent = q1.numQuestao

let totalDeQuestoes = (questoes.length)-1
console.log("Total de questões " + totalDeQuestoes)
total.textContent = totalDeQuestoes

// MONTAR A 1a QUESTAO COMPLETA, para iniciar o Quiz
numQuestao.textContent = q1.numQuestao
imgQuestao.setAttribute('src', 'images/'+q1.imagem)  // ADICIONE
pergunta.textContent   = q1.pergunta
a.textContent = q1.alternativaA
b.textContent = q1.alternativaB
c.textContent = q1.alternativaC
d.textContent = q1.alternativaD

// CONFIGURAR O VALUE INICIAL DA 1a QUESTAO COMPLETA
a.setAttribute('value', '1A')
b.setAttribute('value', '1B')
c.setAttribute('value', '1C')
d.setAttribute('value', '1D')

// PARA MONTAR AS PROXIMAS QUESTOES
function proximaQuestao(nQuestao) {
    numero.textContent = nQuestao
    numQuestao.textContent = questoes[nQuestao].numQuestao
    imgQuestao.setAttribute('src', 'images/'+questoes[nQuestao].imagem) // ADICIONE
    pergunta.textContent   = questoes[nQuestao].pergunta
    a.textContent = questoes[nQuestao].alternativaA
    b.textContent = questoes[nQuestao].alternativaB
    c.textContent = questoes[nQuestao].alternativaC
    d.textContent = questoes[nQuestao].alternativaD
    a.setAttribute('value', nQuestao+'A')
    b.setAttribute('value', nQuestao+'B')
    c.setAttribute('value', nQuestao+'C')
    d.setAttribute('value', nQuestao+'D')
    progresso.value = parseInt(progresso.value) + 1
    //console.log(progresso.value)
}

// VERIFICAR DUPLO CLICK NAS ALTERNATIVAS
alternativas.addEventListener('dblclick', () => {
    //console.log('Duplo clique')
    pontos -= 10 // tirar 10 pontos em caso de duplo click
    if(numQuestao.value == 10 && pontos == 110) { pontos = 100 }
})

function bloquearAlternativas() {
    alternativas.classList.add('bloqueado')
}

function desbloquearAlternativas() {
    alternativas.classList.remove('bloqueado')
}

function piscarNoAcerto() {
    articleQuestoes.classList.remove('errou')
    articleQuestoes.classList.add('acertou')
}

function piscarNoErro() {
    articleQuestoes.classList.remove('acertou')
    articleQuestoes.classList.add('errou')
}

function tirarPiscar() {
    articleQuestoes.classList.remove('acertou')
    articleQuestoes.classList.remove('errou')
}

function verificarSeAcertou(nQuestao, resposta) {

    let numeroDaQuestao = nQuestao.value
    console.log("Questão " + numeroDaQuestao)

    let respostaEscolhida = resposta.textContent
    //console.log("RespU " + respostaEscolhida)

    let certa = questoes[numeroDaQuestao].correta
    //console.log("RespC " + certa)

    if(respostaEscolhida == certa) {
        //console.log("Acertou")
        //respostaEsta.textContent = "Correta 😊"
        piscarNoAcerto()
        somAcerto.play()
        pontos += 10 // pontos = pontos + 10
        if(nQuestao.value == 1 && pontos == 20) { pontos = 10 }
    } else {
        //console.log("Errou!")
        //respostaEsta.textContent = "Errada 😢"
        piscarNoErro()
        somErro.play()
    }
    setTimeout(() => {
        tirarPiscar()
    }, 150);
    
    // atualizar placar
    placar = pontos
    instrucoes.textContent = "Pontos " + placar

    // bloquear a escolha de opcoes
    bloquearAlternativas()

    setTimeout(function() {

        proxima = numeroDaQuestao+1

        if(proxima > totalDeQuestoes) {
            console.log('Fim do Jogo!')
            fimDoJogo()
        } else {
            proximaQuestao(proxima)
        }
    }, 150)
    desbloquearAlternativas()
}

function fimDoJogo() {

    somAplausos.play()

    let s = 's'
    pontos == 0 ? s = '' : s = s
    instrucoes.textContent = "Fim de Jogo! Você conseguiu " + pontos + " ponto"+ s

    instrucoes.classList.add('placar')

    // OCULTAR O ARTICLE DA QUESTAO
    articleQuestoes.style.display = 'none'

    /*setTimeout(function() {
        pontos = 0 // zerar placar
        //location.reload();
        instrucoes.classList.remove('placar')
        // REINICIAR O JOGO
        articleQuestoes.style.display = 'block'
        proximaQuestao(1)
        instrucoes.textContent = 'Leia a questão e clique na resposta correta'
    }, 8000)*/

}
