document.addEventListener('DOMContentLoaded', ()=>{
    const grid = document.querySelector('.grid')

    function createDiv(){
    const divContainer = document.querySelector('grid')
    for(let i=0; i < 100; i++){
        const myDiv = document.createElement('div')
        grid.appendChild(myDiv)
    }
}

createDiv()

const squares = document.querySelectorAll('.grid div')  // divs are now handled as an array
const scoreDisplay = document.querySelector('span')     // score will be displayed in the span container see index.html
const startBtn = document.querySelector('.start')

const width = 10    // for pressing up or down in a 10x10 grid
let currentIndex = 0
let appleIndex = 0
let currentSnake = [2,1,0] // div index 2: head, :1 body, :0 tail
let direction = 1   // snake goes only one block
let score = 0       
let speed = 1       // should be constant for now
let intervalTime = 0
let interval = 0

function startGame(){
    // clear state for start
    currentSnake.forEach(index => squares[index].classList.remove('snake'))  // forEach index in the array representing the snake. has to be cleared first
    squares[appleIndex].classList.remove('apple')
    clearInterval(interval)     // javascript library
    score = 0
    // setup start
    randomApple()
    direction = 1
    scoreDisplay.innerHTML = score
    intervalTime = 1000
    currentSnake = [2,1,0]
    currentIndex = 0
    currentSnake.forEach(index => squares[index].classList.add('snake'))    // this is where the snake at start is displayed
    interval = setInterval(moveOutcomes, intervalTime)      // moveOutcomes will be called each 1 second
}

// deals with Movements and evtl Collision
function moveOutcomes(){

    // BorderCollision
    if (
        (currentSnake[0] % width === width -1 && direction === 1) ||            // Snake hits right wall
        (currentSnake[0] % width === 0 && direction === -1) ||                  // Snake hits left wall
        (currentSnake[0] + width >= (width * width) && direction === width) ||  // SnakeHead hits bottom. Remember that grid is 10x10
        (currentSnake[0] - width < 0 && direction === -width) ||                // SnakeHead hits top
        squares[currentSnake[0] + direction].classList.contains('snake')        // Snake eats itself
    ){
        return clearInterval(interval)
    }

    // Snake moves. Tail gets removed. Head goes into right direction by adding it to the left side of the array
    const tail = currentSnake.pop()                     // pop most right element of the array away    
    squares[tail].classList.remove('snake')             // div representing tail should be normal again
    currentSnake.unshift(currentSnake[0] + direction)   // unshifts new element on the left

    // Snake eating apple
    if(squares[currentSnake[0]].classList.contains('apple')){
        squares[currentSnake[0]].classList.remove('apple')
        squares[tail].classList.add('snake')            
        currentSnake.push(tail)                         // snake gets bigger
        randomApple()
        score++
        scoreDisplay.innerHTML = score
        clearInterval(interval)
        intervalTime = intervalTime * speed             // if snake should move faster change speed here
        interval = setInterval(moveOutcomes,intervalTime)
    }
    squares[currentSnake[0]].classList.add('snake')     // if all is OK new head will be displayed in the right direction via div
}

function randomApple(){
    do{
        appleIndex = Math.floor(Math.random() * squares.length)
    } while (squares[appleIndex].classList.contains('snake'))    // apple does not appear in the snake
    squares[appleIndex].classList.add('apple')
}

// Functionality for pressing keys
function control(e){
    //squares[currentIndex].classList.remove('snake') // remove the snakehead div when key is pressed
    
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
            direction = -width      
            console.log('Up')
            break;
        case "ArrowDown":
            direction = +width
            console.log('Down')
            break;
    }
}

document.addEventListener('keyup', control)
startBtn.addEventListener('click', startGame)
}
)






