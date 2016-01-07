var user = prompt('what is your name?');
alert('Hi there,'+user+', Let\s play some puzzles.');
console.log('the user\'s name is' +user);

var answer2 =prompt('Would you like to play a game? Yes or No').toUpperCase();
if (answer2==='YES'|| answer2==='Y'){
    alert('Ok, let\'s continue');
} else if (answer2==='NO'|| answer2==='N') {
  alert('Too bad. you are going to play');
} else {
    alert('Sorry, you must type Yes or NO')
}
var res1 = document.getElementById('resultOne');

function firstQuestion() {
  var correct = false;
  while (correct===false){
    var answer2 = prompt (user + ', Can you guess my Age?');
    console.log('The user answers question 1:'+ answer2);
      if (answer2 <=29) {
            res1.textContent = 'Too low.';

       } else if (answer2 >=31) {
        res1.textContent = 'too high';
      } else {
        res1.textContent = 'That\'s correct';
        correct = true;
      }
  }
}

firstQuestion()

var res2 = document.getElementById('resultTwo');

function secondQuestion() {
  var ans2 = prompt('Do I have a cat?');
  if (ans2.toUpperCase() === 'Y' || ans2.toUpperCase() === 'YES') {
    res2.textContent = 'No, I do not have a cat.';
  } else {
    res2.textContent = 'You are right.'
  }
}

secondQuestion()

var res3 = document.getElementById('resultThree');

function thirdQuestion() {
  var ans3 = prompt('Do I live in Kent?');
  if (ans3.toUpperCase() === 'Y' || ans3.toUpperCase() === 'YES') {
    res3.textContent = 'You are right.';
  } else {
    res3.textContent = 'You are wrong.';
  }
}

thirdQuestion()

var res4 = document.getElementById('resultFour');

function fourthQuestion() {
  var ans4 = prompt('Was I born in Seattle?')
  if (ans4.toUpperCase() === 'Y' || ans4.toUpperCase() === 'YES') {
    res4.textContent = 'No, I was born in India';
  } else {
    res4.textContent = 'You are right.';
  }
}

fourthQuestion()
