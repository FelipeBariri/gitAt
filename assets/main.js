document.addEventListener("click", trocaCor );

document.getElementById("btn").addEventListener("click", trocaNome );

function trocaNome(e)
{
    let nome = document.getElementById( "nome" ).value
    document.getElementById( "frase" ).innerHTML = "Meu nome é " + nome;
    e.preventdefault();
}
function trocaCor( e ) {
    document.body.style.backgroundColor= 'lightblue' ;
}
