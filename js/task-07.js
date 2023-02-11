const controlSize = document.querySelector("#font-size-control");
const textSize = document.querySelector("#text");

controlSize.addEventListener("input", handleInputRange);

function handleInputRange(event) {
  textSize.style.fontSize = `${event.currentTarget.value}px`;
}

