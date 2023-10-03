const carousel = document.querySelector('.carousel')
const grid = document.querySelector('.grid')
// const firstImage = carousel.querySelectorAll('img')[0]
const arrowIcons = document.querySelectorAll('.wrapper i')
console.log(grid.clientWidth)

// let firstImageWidth = firstImage.clientWidth + 18

arrowIcons.forEach(icon => {
    icon.addEventListener('click', () => {
        // console.log(icon)
        grid.scrollLeft += icon.id == 'left' ? -grid.clientWidth : grid.clientWidth
    })
})