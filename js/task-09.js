function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const body = document.querySelector("body");
const colorChange =  document.querySelector("button.change-color");
const colorSpan = document.querySelector("span.color");

colorChange.addEventListener("click", (element) => {
  let color = getRandomHexColor();
  body.style.backgroundColor = color;
  colorSpan.textContent = color;
});