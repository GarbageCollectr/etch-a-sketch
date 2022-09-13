const container = document.getElementById('container')
const button = document.getElementById('submit')


function makeRows(rows, cols){
    
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for ( let c = 0; c < (rows * cols); c++){
        let cell = document.createElement('div');
        
        container.appendChild(cell).className= 'grid'
    }
}

makeRows(80,80);



button.addEventListener('click', () => {
    const xaxis = document.getElementById('xaxis').value
    const yaxis = document.getElementById('yaxis').value
    container.innerHTML = ""
    makeRows(xaxis,yaxis)
})



pieces = document.querySelectorAll('.grid')
pieces.forEach((piece) => {
    piece.addEventListener('mouseover', function(e){
        piece.classList.add('hovered')
    });
});