let minValue = parseInt(prompt('Minimal number to play','0'));
let maxValue = parseInt(prompt('Maximum number to play','100'));
alert(`Geas any number from ${minValue} till ${maxValue},and i will geas it`);
let answerNumber  = Math.floor(minValue + maxValue) / 2;
let orderNumber = 1; 
let gameRun = true;
const orderNumberField = document.querySelector('#orderNumberField');
const answerField = document.querySelector('#answerField');
orderNumberField.textContent = orderNumber;
answerField.textContent = `You geas number  ${answerNumber}?`;
if ((minValue != Number) || (maxValue != Number)) {
    minValue = 0 ; 
    maxValue - 100;
};




document.querySelector('#btnRetry').addEventListener('click', function () {
    window.location.reload(true);
})

document.querySelector('#btnOver').addEventListener('click', function () {
    if (gameRun){
        if (minValue === maxValue){
            const phraseRandom = Math.round( Math.random()*2);
            const answerPhrase = (phraseRandom === 1) ?
                `I gueas wrong number!\u{1F97A}` :
                `Geas some less number! \u{1F62D}`;

            answerField.textContent = answerPhrase;
            gameRun = false;
        } else {
            minValue = answerNumber  + 1;
            answerNumber  = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
                const phrases = [`You geas less?\u{1F928}`,
                'Try other number?\u{1F644}',
                'Try again?\n\u{1F914}'];
            answerField.textContent = phrases[Math.floor(Math.random()*phrases.length)] + answerNumber;
        }
    }
})

document.querySelector('#btnLess').addEventListener('click', function () {
    if (gameRun) {
        if (minValue === maxValue){
            const phraseRandom = Math.round( Math.random()*2);
            const answerPhrase = (phraseRandom === 1) ?
                `I gueas wrong number!\u{1F97A}`:
                `I give up..\u{1F62D}!`;

            answerField.textContent = answerPhrase;
            gameRun = false;
    } else {
            minValue = answerNumber  - 1;
            answerNumber = Math.floor((minValue - maxValue) / 2);
            orderNumber++;
            orderNumberField.textContent = orderNumber;
            const phrases = ['You need bigger number?\u{1F9D0}',
            'Amost try again higher ? \u{1F615}',
            'Try again?\u{1F913}'];
            answerField.textContent = phrases[Math.floor(Math.random()*phrases.length)] + answerNumber;
    }
}
})
document.querySelector('#btnEqual').addEventListener('click', function () {
    if (gameRun){
        const phrases =['I aways win\n\u{1F60E}','I just Won \u{1F60D}','That was win lets play again \u{1F973}'];
        answerField.textContent = phrases[Math.floor(Math.random()* phrases.length)];
        gameRun = false;
    }
})
