/*var hamburguer = document.querySelector(".hamburguer");
hamburguer.addEventListener("click", function() {
    var sidebar = document.querySelector(".sidebar");
    sidebar.classList.toggle("oculto");
})*/
/* ---------------  fatorando o código Javascript  ---------------*/


document.querySelector(".hamburguer").addEventListener("click", () => {
    document.querySelector(".container").classList.toggle("oculto");
});