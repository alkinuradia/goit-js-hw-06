let counterValue = 0;
let counter = document.querySelector('#value');
const minusButton = document.querySelector('button[data-action="decrement"]');
const plusButon = document.querySelector('button[data-action="increment"]');

minusButton.addEventListener('click', () => {
    counterValue -= 1;
    counter.textContent = counterValue;
});

plusButon.addEventListener('click', () => {
    counterValue += 1;
    counter.textContent = counterValue;
});