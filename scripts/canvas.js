const defaultGridSize = 16;

let gridSize = defaultGridSize;



function createGrid(){
    for(let colIndex = 0; colIndex <= gridSize; colIndex++) {
        createGridRow(colIndex)
    }
}

function createGridRow(colIndex) {
    let canvas = document.getElementById("canvas");
    const currentRowTest = createGridRowElement(colIndex);
    console.log(currentRowTest);

    for(let rowIndex = 0; rowIndex <= gridSize; rowIndex++) {
        let square = createGridSquareElement(colIndex, rowIndex)
        currentRowTest.append(square);
    }

    canvas.append(currentRowTest);
}



/**
 * Factory
 */
function createGridRowElement(colIndex) {
    let row = document.createElement("div");
    row.id = getCurrentColumnId(colIndex);
    row.classList.add("canvas-row");

    return row;
}


function getCurrentColumnId(colIndex){
    return "canvas-column-" + colIndex;
}



function createGridSquareElement(colIndex, rowIndex) {
    let squareContainer = document.createElement("div");
    squareContainer.id = getCurrentSquareId(colIndex, rowIndex);
    squareContainer.classList.add("canvas-square-container");

    let square = document.createElement("div");
    square.classList.add("canvas-square");

    
    squareContainer.appendChild(square);

    return squareContainer;
}


function getCurrentSquareId(colIndex, rowIndex) {
    return "square-col-" + colIndex + "-row-" + rowIndex; 
}


createGrid();