const DEFAULT_GRID_SIZE = 16;


function createGrid(gridSize) {
    cleanCanvas();

    for (let colIndex = 0; colIndex <= gridSize; colIndex++) {
        createGridRow(colIndex, gridSize)
    }
}

function createGridRow(colIndex, gridSize) {
    let canvas = document.getElementById("canvas");
    const currentRow = createGridRowElement(colIndex);

    for (let rowIndex = 0; rowIndex <= gridSize; rowIndex++) {
        let square = createGridSquareElement(colIndex, rowIndex)
        currentRow.append(square);
    }

    canvas.append(currentRow);
}

function cleanCanvas() {
    let canvas = document.getElementById("canvas");

    while (canvas.firstChild) {
        canvas.removeChild(canvas.firstChild);
    }
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


function getCurrentColumnId(colIndex) {
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


createGrid(DEFAULT_GRID_SIZE);
