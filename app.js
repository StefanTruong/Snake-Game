document.addEventListener('DOMContentLoaded', ()=>{
    const grid = document.querySelector('.grid')

    function createDiv(){
    const divContainer = document.querySelector('grid')
    for(let i=0; i < 98; i++){
        const myDiv = document.createElement('div')
        grid.appendChild(myDiv)
    }
}

createDiv()

const squares = document.querySelectorAll('.grid div')
const scoreDisplay = document.querySelectorAll('span') // score will be displayed in the span container see index.html
const startBtn = document.querySelector('.start')

const width = 10  // for pressing up or down in a 10x10 grid
let currentIndex = 0
let appleIndex = 0
let currentSnake = [2,1,0] // div index 2: head, :1 body, :0 tail
let direction = 1 // snake goes only one block
let score = 0
let speed  = 1
let intervalTime = 0
let interval = 0


// Functionality for pressing keys
function control(e){
    squares[currentIndex].classList.remove('snake') // remove the snakehead div when key is pressed
    
    switch (e.key) {
        case "ArrowLeft":
            direction = -1
            console.log('Left')
            break;
        case "ArrowRight":
            direction = 1
            console.log('Right')
            break;
        case "ArrowUp":
            direction = +width
            console.log('Up')
            break;
        case "ArrowDown":
            direction = -width
            console.log('Down')
            break;
    }
}

document.addEventListener('keyup', control)
}
)






