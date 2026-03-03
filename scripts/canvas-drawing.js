function changeSquareColor() {

}

const canvas = document.getElementById("canvas");

canvas.addEventListener("mouseover", (event) => {
    if(event.target.classList.contains("canvas-square")){
        if (event.target.style.opacity < 1) {
            var opacity = event.target.style.opacity;
            event.target.style.opacity = opacity ? (parseFloat(opacity) + 0.25) : 0.25;
        }
    }
});


function resetCanvas() {
    const gridSizeInput = document.getElementById('grid-size');
    let size = gridSizeInput.valueAsNumber;

    if(parseInt(size) && size >= 16 && size <= 64){
        createGrid(size);
    }
    else {
        alert("You must enter a value between 16 and 64");
        gridSizeInput.valueAsNumber = DEFAULT_GRID_SIZE;
    }
}