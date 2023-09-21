document.body.style.zoom = "100%";
document.getElementById("BVer").addEventListener('click', function () {
    document.querySelector(".Contenedor-Binicio").style.display = "none";
    document.getElementById("resultado").style.display = "flex";
    //document.querySelector(".flores").style.display = "flex";
})


document.getElementById("BotonCerrar").addEventListener('click', function () {
    document.getElementById("resultado").style.display = "none";
    document.querySelector(".flores").style.display = "flex";


})