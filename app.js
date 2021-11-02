document.addEventListener('DOMContentLoaded', ()=>{
    const grid = document.querySelector('.grid')

    function createDiv(){
    const divContainer = document.querySelector('grid')
    for(let i=0; i < 40; i++){
        const myDiv = document.createElement('div')
        grid.appendChild(myDiv)
    }
}

createDiv()


    const squares = document.querySelectorAll('.grid div')
    const scoreDisplay = document.querySelector('span')
    const startBtn = document.querySelector('.start')

    const width = 10
    let currentIndex = 0
    let appleIndex = 0
})






