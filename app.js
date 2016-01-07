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

var correct = false;
while (correct===false){
  var answer2 = prompt (user + ', Can you guess my Age?');
  console.log('The user answers question 1:'+ answer2);
    if (answer2 <=29) {
          alert('Too low.');

     } else if (answer2 >=31) {
      alert('too high');
    } else {
      alert('That\'s correct');
      correct = false;
    }
}
