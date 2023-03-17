const imgContainer = document.getElementById('img-container')
const leftBtn = document.getElementById('left')
const rightBtn = document.getElementById('right')
const img = document.querySelectorAll('img')
let index = 0

rightBtn.addEventListener('click', ()=> {
    index++
    changeImg()
})

leftBtn.addEventListener('click', ()=> {
    index--
    changeImg()
})

function changeImg() {
    if(index > img.length - 1) {
        index = 0
    } else if(index < 0) {
        index = img.length - 1
    }
    imgContainer.style.transform = `translateX(-${index * 500}px)`
}

let timeInterval = setInterval(run, 2000)

function run() {
    index++
    changeImg()
}

function clearInterval() {
    clearInterval(timeInterval)

    timeInterval = setInterval(run, 2000)
}