
function detectHover() {

}

function changeSquareColor() {

}

const canvas = document.getElementById("canvas");

canvas.addEventListener("mouseover", (event) => {
    if(event.target.classList.contains("canvas-square")){
        if (event.target.style.opacity < 1) {
            var opacity = event.target.style.opacity;
            event.target.style.opacity = opacity ? (parseFloat(opacity) + 0.15) : 0.1;
        }
    }
});
