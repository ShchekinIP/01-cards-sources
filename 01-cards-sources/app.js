function chooseSlide(activeSlide){
const slides = document.querySelectorAll('.slide')
slides[activeSlide].classList.add('active')

for(const slide of slides){
    slide.addEventListener('click', () => {
        clearActive()
        slide.classList.add('active')


    })


}

function clearActive(){
    slides.forEach((slide) => {
        slide.classList.remove('active')
    })
}
}

chooseSlide(2)
