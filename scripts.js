const container = document.getElementById("container")


function makeRows(rows, cols){
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for ( let c = 0; c < (rows * cols); c++){
        let cell = document.createElement('div');
        cell.innerText = (c+1);
        container.appendChild(cell).className= "grid-item"
    }
}

const pieces = document.querySelectorAll(".grid-item")

pieces.forEach((piece) => {
    piece.addEventListener('mouseover', function(e){
        e.classList.add(".hovered")
    });
});


makeRows(16,16);