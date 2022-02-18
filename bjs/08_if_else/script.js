let minValue = parseInt(prompt('Minimal number to play','0'));
let maxValue = parseInt(prompt('Maximum number to play','100'));
if ((minValue != Number) || (maxValue != Number)) {
minValue = 0;
maxValue = 100;
}
alert(`Geas one number from ${minValue} till ${maxValue},and i will geas it`);
let answerNumber  = Math.floor(minValue + maxValue) /2;

function NumInWords (number) {
    const first = ['','one ','two ','three ','four ', 'five ','six ','seven ','eight ','nine ','ten ','eleven ','twelve ','thirteen ','fourteen ','fifteen ','sixteen ','seventeen ','eighteen ','nineteen '];
    const tens = ['', '', 'twenty','thirty','forty','fifty', 'sixty','seventy','eighty','ninety'];
    const mad = ['', 'thousand', 'million', 'billion', 'trillion'];
    let word = '';
  
    for (let i = 0; i < mad.length; i++) {
      let tempNumber = number%(100*Math.pow(1000,i));
      if (Math.floor(tempNumber/Math.pow(1000,i)) !== 0) {
        if (Math.floor(tempNumber/Math.pow(1000,i)) < 20) {
          word = first[Math.floor(tempNumber/Math.pow(1000,i))] + mad[i] + ' ' + word;
        } else {
          word = tens[Math.floor(tempNumber/(10*Math.pow(1000,i)))] + '-' + first[Math.floor(tempNumber/Math.pow(1000,i))%10] + mad[i] + ' ' + word;
        }
      }
  
      tempNumber = number%(Math.pow(1000,i+1));
      if (Math.floor(tempNumber/(100*Math.pow(1000,i))) !== 0) word = first[Math.floor(tempNumber/(100*Math.pow(1000,i)))] + 'hunderd ' + word;
    }
      return word;
  }
let orderNumber = 1; 
let gameRun = true;
const orderNumberField = document.querySelector('#orderNumberField');
const answerField = document.querySelector('#answerField');
orderNumberField.textContent= orderNumber;
answerField.te= `You geas number  ${answerNumber}?`;



document.querySelector('#btnRetry').addEventListener('click', function () {
    window.location.reload(true);
})

document.querySelector('#btnOver').addEventListener('click', function () {
    if (gameRun){
        if (minValue === maxValue){
            const phraseRandom = Math.round( Math.random()*2);
            const answerPhrase = (phraseRandom === 1) ?
                `I gueas wrong number!\n\u{1F914}` :
                `Geas some less number! \n\u{1F92F}`;

            answerField.textContent = answerPhrase;
            gameRun = false;
        } else {
            minValue = answerNumber  + 1;
            answerNumber  = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            const phraseRandom = Math.round( Math.random()*2);
            const answerPhrase = (phraseRandom === 1) ?
                `You geas less?\n\u{1F914}`:
                'Try other number?\n\u{1F914}';
                `Try less?\n\u{1F92F}`;
            answerField.textContent = answerPhrase + answerNumber;
        }
    }
})

document.querySelector('#btnLess').addEventListener('click', function () {
    if (gameRun) {
        if (minValue === maxValue){
            const phraseRandom = Math.round( Math.random()*2);
            const answerPhrase = (phraseRandom === 1) ?
                `I gueas wrong number!\n\u{1F914}`:
                `I give up..\n\u{1F92F}`;

            answerField.innerText = answerPhrase;
            gameRun = false;
    } else {
            minValue = answerNumber  - 1;
            answerNumber  = Math.floor((minValue - maxValue) / 2);
            maxValue++;
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            const phraseRandom = Math.round( Math.random()*2);
            const answerPhrase = (phraseRandom === 1) ?
                `You need bigger number?\n\u{1F914}`:
                'Amost try again higher ?\n\u{1F914}';
                `Try more\n\u{1F92F}`;
            answerField.textContent = answerPhrase + answerNumber;
    }
}
})
document.querySelector('#btnEqual').addEventListener('click', function () {
    if (gameRun){
        const phraseRandom = Math.round( Math.random() * 3);
        const answerPhrase = (phraseRandom === 3) ?
                     `I aways win\n\u{1F60E}`:
                     `I just Won \u{1F973}`;
                     'That was win lets play again';
        answerField.innerText = answerPhrase
        gameRun = false;
    }
})
