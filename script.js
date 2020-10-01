console.log(myQuestions);

var startPage = document.getElementById("startPage");
var questionsPage = document.getElementById("questionsPage");
var highscoresPage = document.getElementById("highscoresPage");

var startQuiz = document.getElementById("startQuiz");

var index = 0;

startPage.addEventListener("click", function () {
  startPage.classList.add("hide");
  questionsPage.classList.remove("hide");
  displayQuestion();
});

function displayQuestion() {
  questionsPage.innerHTML = "";
  var currentQ = myQuestions[index];

  console.log(currentQ);

  var question = document.createElement("h3");
  question.textContent = currentQ.title;

  questionsPage.appendChild(question);

  for (var answer of currentQ.choices) {
    console.log(answer);
    var btn = document.createElement("button");
    btn.textContent = answer;
    btn.onclick = check;

    questionsPage.appendChild(btn);
  }
}

function check() {
    // these aren't working..makes you unable to go to next question-figure out why
//if (choices = answer)
 //   { "Correct"
 //} else {
   // "incorrect"
//}
    
   // if (myQuestions = answer){
    //   "correct!"
    //  } else {
   //     "incorrect"
   //   }

    // if clicked correct display correct
  index++
  displayQuestion();
}
