var imgAtual = "img2.jpeg";
var imgAnterior = "img1.jpeg";

function trocar(){
    document.getElementById("figura").src = 'assets/' +imgAtual;
    let aux = imgAtual
    imgAtual = imgAnterior
    imgAnterior = aux;
}

function alterarCor() {
    seletor = document.querySelector("input");
    document.body.style.backgroundColor = seletor.value;
}