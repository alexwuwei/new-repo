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
var res2 = document.getElementById('resultTwo');
var res3 = document.getElementById('resultThree');
var res4 = document.getElementById('resultFour');


var quesData = [ ['Am I 30 years old?', 'Y', 'YES', 'That is correct', 'You are so wrong oh my god', res1], ['Do I have a cat?', 'N', 'NO', 'You are right', 'You are wrong', res2], ['Do I live in Kent?', 'Y', 'YES', 'You are right', 'You are wrong', res3], ['Was I born in Seattle', 'N', 'NO', 'You are right', 'You are wrong', res4] ];



for (var i = 0; i < quesData.length; i++) {
  // questions();
  questions()
}

function questions () {

  var answer = prompt(quesData[i] [0]);
  if (answer.toUpperCase() === quesData[i] [1] || answer.toUpperCase() === quesData[i] [2]) {
    //correct
    console.log("answer was right");
    quesData[i] [5].textContent = quesData[i] [3];
    quesData[i] [5].className = 'right';
  } else {
    //wrong answer
    console.log("answer was wrong");
    quesData[i] [5].textContent = quesData[i] [4];
    quesData[i] [5].className = 'wrong';
  };
}




// function secondQuestion() {
//   var ans2 = prompt('Do I have a cat?');
//   if (ans2.toUpperCase() === 'Y' || ans2.toUpperCase() === 'YES') {
//     res2.textContent = 'No, I do not have a cat.';
//   } else {
//     res2.textContent = 'You are right.'
//   }
// }
//
// secondQuestion()
//
//
//
// function thirdQuestion() {
//   var ans3 = prompt('Do I live in Kent?');
//   if (ans3.toUpperCase() === 'Y' || ans3.toUpperCase() === 'YES') {
//     res3.textContent = 'You are right.';
//   } else {
//     res3.textContent = 'You are wrong.';
//   }
// }
//
// thirdQuestion()
//
//
//
// function fourthQuestion() {
//   var ans4 = prompt('Was I born in Seattle?')
//   if (ans4.toUpperCase() === 'Y' || ans4.toUpperCase() === 'YES') {
//     res4.textContent = 'No, I was born in India';
//   } else {
//     res4.textContent = 'You are right.';
//   }
// }
//
// fourthQuestion()
