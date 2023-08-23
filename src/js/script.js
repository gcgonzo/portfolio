// Buttom Dark

const body = document.querySelector("body")
const toggle = document.getElementById("btn__dark-light")
toggle.onclick = () => {
  toggle.classList.toggle("active")
  body.classList.toggle("active")
  body.classList.remove("body")
  body.classList.toggle("themes-light")
}
const sun = document.querySelector(".sun").getAttributeNames("src")[0]

console.log(sun)

// Header Scroll fixed

document.addEventListener("scroll", () => {
  const header = document.querySelector("header")
  console.log(header)
  if (window.scrollY > 500) {
    header.classList.add("scrolled")
  } else {
    header.classList.remove("scrolled")
  }
})

// Menu Hamburger Animation
const bar = document.querySelectorAll(".bar")
const Hamburger = document.querySelector(".hamburger")
const menu = document.querySelector("#nav ul")
console.log(bar)
console.log(Hamburger)
console.log(menu)

Hamburger.addEventListener("click", () => {
  bar.forEach(function (barClass) {
    barClass.classList.toggle("active")
    menu.classList.toggle("active")
  })
})
