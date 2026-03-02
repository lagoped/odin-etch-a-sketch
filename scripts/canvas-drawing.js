
function detectHover() {

}

function changeSquareColor() {

}

const canvas = document.getElementById("canvas");

canvas.addEventListener("mouseover", (event) => {
    //   event.target.style.backgroundColor = "black"; //TODO have a dynamical value to goes darker and darker?

    console.log(event.target.style.opacity);
    if (event.target.style.opacity < 1) {
        console.log("update");
        event.target.style.opacity += 0.05; //TODO not working like I expected
    }
});