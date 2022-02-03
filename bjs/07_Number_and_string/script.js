let lastOperand = 0;
let operation = null;

const inputWindow = document.querySelector('#type');




document.querySelector('.numpad').addEventListener('click', function () {
if(inputWindow.textContent == "") {
    inputWindow.textContent = text;
}
else if (inputWindow.textContent.length <=26){
    inputWindow.textContent = inputWindow.textContent + text;
}
})

document.querySelector('#clear').addEventListener('click', function () {
    lastOperand = 0;
    operation = null;
    inputWindow.value = '';
}) 