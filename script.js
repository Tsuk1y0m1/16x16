const btn = document.querySelector('button')
let size = 16
start(size)
btn.addEventListener('click', changeSize)

function changeSize() {
    let sizeAnswer = prompt('Enter your size(from 16 to 100 inclusive)', "16")
    size = (sizeAnswer != null && 16<= +sizeAnswer <= 100) ? +sizeAnswer : 16;
    document.body.removeChild(document.body.lastElementChild)
    start(size)
}
function start(size) {
    const conteiner = document.createElement('div')
    document.body.append(conteiner)
    for (let i = 1; i <= size; i++) {
      const newDiv = document.createElement('div')
      newDiv.classList.add('lineConteiner')
      newDiv.style.cssText = 'display: flex; justify-content: center;'
      for (let i = 1; i <= size; i++) {
        const newBlock = document.createElement('div')
        newBlock.classList.add('block')
        newBlock.style.cssText = 'width: 3rem; height: 3rem; background: red;'
    
        newBlock.addEventListener('mouseover', fMouseover) 
        newBlock.addEventListener('mouseout', fMouseout)
        newDiv.appendChild(newBlock)
      }
      conteiner.appendChild(newDiv)
    }
}

function fMouseover(event) {
    event.target.style.background = 'blue'
}

function fMouseout(event) {
    event.target.style.background = 'red'
}
