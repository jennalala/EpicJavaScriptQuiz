var index = 0;
var timeLeft = 75;
var interval;
var score = 0;
// var ids = []

startQuiz.addEventListener("click", init);
enterYourName.addEventListener("click", insertName);
view_highscores.addEventListener("click", linkViewHS)
view_startpage.addEventListener("click", linkViewStartPage)

function init() {
  startTimer();
  startPage.classList.add("hide");
  questionsPage.classList.remove("hide");
  displayQuestion();
}

function startTimer() {
  clearInterval(interval);

  interval = setInterval(function () {
    timeLeft--;
    seconds.textContent = timeLeft;

    if (timeLeft === 0) {
      endGame();
    }
  }, 1 * 1000);
}

// function startTimer() {
//   interval = setInterval(function () {
//     timeLeft--;
//     seconds.textContent = timeLeft;
//     console.log(ids)

//     if(timeLeft === 0){
//       for(const id of ids){
//         clearInterval(id)
//       }
//     }

//   }, 1 * 1000);

//   ids.push(interval)
// }

function displayQuestion() {
  questionsPage.innerHTML = "";
  var currentQ = myQuestions[index];

  var question = document.createElement("h3");
  question.textContent = currentQ.title;

  questionsPage.appendChild(question);

  for (var answer of currentQ.choices) {
    var btn = document.createElement("button");
    btn.textContent = answer;
    btn.onclick = check;
    questionsPage.appendChild(btn);
  }
}

function check() {
  if (myQuestions[index].answer === this.textContent) {
    score++;
  }
  currentscore.textContent = score;

  index++;

  if (index < myQuestions.length) {
    displayQuestion();
  } else {
    endGame();
  }
}

function endGame() {
  clearInterval(interval);

  finalScore.textContent = score;
  questionsPage.classList.add("hide");
  highscoresPage.classList.remove("hide");

  displayHighScores();
}

function linkViewStartPage(){
  view_highscores.classList.add("hide");
  view_startpage.classList.remove("hide");
  startPage.classList.remove("hide");
  questionsPage.classList.add("hide");
  highscoresPage.classList.add("hide");
  scoreForm.classList.add("hide");
}
function linkViewHS(){
  finalScore.textContent = score;
  view_highscores.classList.add("hide");
  view_startpage.classList.remove("hide");
  startPage.classList.add("hide");
  questionsPage.classList.add("hide");
  highscoresPage.classList.remove("hide");
  scoreForm.classList.add("hide");  
  displayHighScores();
}


function insertName() {
  var player = user_name.value;
  scoreForm.classList.add("hide");

  var record = { player, score };
  var high_scores = getLS();
  high_scores.push(record);
  setLS(high_scores);

  displayHighScores()
}

function displayHighScores() {
  var high_scores = getLS();

  var sorted_high_scores = high_scores.sort(function (a, b) {
    return b.score - a.score;
  });

  for (const rec of sorted_high_scores) {
    const li = document.createElement("li");
    li.textContent = rec.player + ": " + rec.score;
    highscore_list.appendChild(li);
  }
}

var KEY = "HIGH_SCORES";
function getLS() {
  return JSON.parse(localStorage.getItem(KEY)) || [];
}
function setLS(data) {
  localStorage.setItem(KEY, JSON.stringify(data));
}


var x = 'x'
var y = 'y'

console.log(x + ' - '+ y)
