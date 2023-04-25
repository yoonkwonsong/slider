const slides = document.querySelectorAll(".image")
const btns = document.querySelectorAll(".btn")

let counter = 0

slides.forEach((slide, index) => {
    slide.style.left = `${index}00%`
})

btns.forEach((btn) =>
    btn.addEventListener("click", (e) => {
        e.target.classList.contains("btn-start") &&
            (intervalOne = window.setInterval(transformFn, 1000))
        e.target.classList.contains("btn-stop") &&
            window.clearInterval(intervalOne)
    })
)

function transformFn() {
    counter++

    counter > slides.length - 1 && (counter = 0)

    slides.forEach((slide) => {
        slide.style.transform = `translateX(-${counter * 100}%)`
    })

    // console.log(counter)
}
