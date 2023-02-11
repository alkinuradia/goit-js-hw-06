const inputControl = document.querySelector("#controls");
const btnCreate = document.querySelector("[data-create]");
const btnDestroy = document.querySelector("[data-destroy]");
const boxes = document.querySelector("#boxes");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const createBoxes = (amount) => {
  amount = inputControl.firstElementChild.value;
  const elementsArr = [];
  for (let i = 0; i < amount; i += 1) {
    const newDiv = document.createElement("div");
    newDiv.style.backgroundColor = getRandomHexColor();
    newDiv.style.height = `${30 + 10 * i}px`;
    newDiv.style.width = `${30 + 10 * i}px`;
    boxes.insertAdjacentElement("beforeend", newDiv);
  }
};

const destroyBoxes = (event) => {
  boxes.innerHTML = "";
};

btnCreate.addEventListener("click", createBoxes);

btnDestroy.addEventListener("click", destroyBoxes);