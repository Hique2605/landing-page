

var setaesquerda = window.document.getElementById("setaesquerda")
var Bruna = window.document.getElementById("brunacard")
var Leonardo = window.document.getElementById("leocard")
var Samantha = window.document.getElementById("samanthacard")
var setaDireita = window.document.getElementById("setadireita")



function RolarParaDireita() {
    Bruna.style = "display:none"
    Samantha.style = "display:flex"
    setadireita.style = "display: none"
    setaesquerda.style = "display: flex; margin-top:  55px"
}

function RolarParaEsquerda() {
    Bruna.style = "display:flex"
    Samantha.style = "display:none"
    setadireita.style = "display: flex"
    setaesquerda.style = "display: none; margin-top:  55px"
}

