// tiraba codigo en ingles el fantasma

const buttons = document.getElementsByClassName("more-info-btn")
const images = document.getElementsByClassName("function-image")

const funcionNoImplementada = () => {
    alert("Función no implementada")
}

for(let button of buttons) {
    button.addEventListener("click", funcionNoImplementada)
}

for(let image of images) {
    image.addEventListener("click", funcionNoImplementada)
}