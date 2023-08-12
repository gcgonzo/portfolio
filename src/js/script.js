// Buttom Dark

const body = document.querySelector("body")
const toggle = document.getElementById("btn__dark-light")
toggle.onclick = () => {
  toggle.classList.toggle("active")
  body.classList.toggle("active")
  body.classList.remove("body")
  body.classList.toggle("themes-light")
}
