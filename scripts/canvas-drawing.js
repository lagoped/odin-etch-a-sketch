

const canvas = document.getElementById("canvas");

canvas.addEventListener("mouseover", draw);
canvas.addEventListener("click", draw);


function draw(event){
    if(event.target.classList.contains("canvas-square")){
        var opacity = event.target.style.opacity;
        const notAlreadyDrawn = (opacity == null || opacity == undefined || opacity == "0" || opacity == "");
        
        if(notAlreadyDrawn && document.getElementById('random-color').checked){
            changeSquareColor(event);
        }

        if (opacity < 1) {
            event.target.style.opacity = opacity ? (parseFloat(opacity) + 0.25) : 0.25;
        }
    }
}

function changeSquareColor(event) {
    const randomColor = '#'+(0x1000000+Math.random()*0xffffff).toString(16).substring(1, 7);
    event.target.style.backgroundColor = randomColor;
}


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