var readlineSync = require('readline-sync');
var score = 0;
var userName = readlineSync.question("Enter your good name: ");
console.log("Welcome", userName);
console.log(userName,"DO YOU KNOW VIRENDRA \n");


var questions = [{'question': 'Where did Virendra live? ',
                  'answer': 'Malvani'},
                  {'question': 'What is currently Virendra studying? ',
                  'answer': 'Engineering'},
                  {'question': 'Is Virendra introvert or extrovert? ',
                  'answer': 'Introvert'},
                  {'question': 'What is the birth day of Virendra? ',
                  'answer': 'Tuesday'},
                  {'question': 'What is surname of Virendra? ',
                  'answer': 'Wadher'},
                  {'question': 'From which college does Virendra done diploma. ',
                  'answer': 'SBMP'},
                  {'question': 'What does Virendra like tea or coeffe? ',
                  'answer': 'Tea'}];
          
function youKnowMe(question, answer){
  var userAnswer = readlineSync.question(question);
  if (userAnswer.toLowerCase() === answer.toLowerCase()){
    score += 1;
    console.log("YAY! you're right :)");
    console.log("\n");
  }
  else{
    console.log("Sorry! Its wrong answer. :(");
    console.log("\n");
  }
}

for (var i = 0; i < questions.length; i++){
  youKnowMe(questions[i].question, questions[i].answer);
}

console.log("Your Score: ", score);
console.log("Thanks for your valuable time :)");
console.log("Thanks to TANAY PRATAP SIR _/\\_");
              