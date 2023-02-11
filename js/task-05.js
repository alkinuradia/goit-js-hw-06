const inputText = document.querySelector('#name-input');
const output = document.querySelector('#name-output');
inputText.addEventListener('input', event => {
    output.textContent = event.target.value;
    if (event.target.value === '') {
        output.textContent = 'Anonymous';
    }
})