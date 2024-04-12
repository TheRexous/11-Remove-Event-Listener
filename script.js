const circle = document.querySelector('.circle')
let count = 0
let height = 0

function moveCircle() {
    height += 100
    circle.style.top = height + 'px'
    if (height > 300) {
        circle.removeEventListener('click', moveCircle)
    }
}

circle.addEventListener('click', moveCircle)

function toggleColor() {
    circle.classList.toggle('white-circle')
    count++
    console.log(count)
    if (count > 9) {
        circle.removeEventListener('click', toggleColor)
    }
}

circle.addEventListener('click', toggleColor)