const carousel = document.querySelector('.carousel')
const firstItem = carousel.querySelectorAll('.carousel-item')[0]
const arrowIcons = document.querySelectorAll('.wrapper i')

const firstItemWitdth = firstItem.clientWidth

arrowIcons.forEach(icon => {
    icon.addEventListener('click', () => {
        // console.log(icon)
        carousel.scrollLeft += icon.id == 'left' ? -firstItemWitdth : firstItemWitdth
    })
})