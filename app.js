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

}
)






