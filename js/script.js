/*var hamburguer = document.querySelector(".hamburguer");
hamburguer.addEventListener("click", function() {
    var sidebar = document.querySelector(".sidebar");
    sidebar.classList.toggle("oculto");
})*/
/* ---------------  fatorando o código Javascript  ---------------*/


document.querySelector(".hamburguer").addEventListener("click", () => {
    document.querySelector(".container").classList.toggle("oculto");
});

/*
 * 
 */

function atualizaPreco() {
    const quant = document.querySelector("#quant").value;
    const temJs = document.querySelector("#js").checked;
    const incluirLayuot = document.querySelector("#layout-sim").checked
    const prazo = document.querySelector("#prazo").value

    var preco = 200.00 * quant;
    if (temJs) preco *= 1.2;
    if (incluirLayuot) preco += 500.00;
    let taxaurgencia = 1 - prazo * 0.1;
    preco *= 1 + taxaurgencia;



    document.querySelector("#atualizapreco").innerHTML = preco.toFixed(2);
}
/*
 * 
 */

document.querySelector("#quant").addEventListener("change", atualizaPreco);
document.querySelector("#js").addEventListener("change", atualizaPreco);
document.querySelector("#layout-sim").addEventListener("change", atualizaPreco);
document.querySelector("#layout-nao").addEventListener("change", atualizaPreco);
document.querySelector("#prazo").addEventListener("change", function() {
    const prazo = document.querySelector("#prazo").value
    document.querySelector("#labelPrazo").innerHTML = `Prazo:  ${prazo} Semanas`;
    atualizaPreco()

});