var startEl = document.querySelector('.btc');
var theTimeEl = document.querySelector("#the-time")
var quizFormEl = document.querySelector('.quiz-form')
var bodyEl = document.querySelector('body')
var score = 0
var counter = 60;
var highScoreSave = [];

console.log(localStorage)

/*The timer for the quiz*/
var timer = function (myStopFunction) {
  event.preventDefault();
  var interval = setInterval(function() {
    theTimeEl.innerHTML = --counter;
    if (counter == 0) {
      clearInterval(interval)
      theTimeEl.innerHTML = "";
    }else {
    }
  }, 1000);
};

/*The result of getting a wrong anwser*/
var penalty = function() {
  score = score - 15;
  counter = counter - 15;
  if (counter <= 0){
    counter = 1
  };

  var wrong = document.createElement('div');
  wrong.className = ('result');
  wrong.textContent = 'Wrong'
  bodyEl.appendChild(wrong);
  var wrongEl = document.querySelector('.result')

  setTimeout(function (){
    wrongEl.remove()
  }, 1000);
  
}

/*The result of getting a correctanwser*/
var reward = function() {
  score = score + 10;

  var right = document.createElement('div');
  right.className = ('result');
  right.textContent = 'Correct!'
  bodyEl.appendChild(right);
  var rightEl = document.querySelector('.result')

  setTimeout(function (){
    rightEl.remove()
  }, 1000);
};

/*Question 5*/
var question5 = function() {
  quizFormEl.innerHTML = "";

  var question = document.createElement('h1');
  question.textContent = 'A binary variable representing true and false is called: ';
  quizFormEl.appendChild(question);

  var answer1 = document.createElement('button');
  answer1.textContent = '1. Div';
  answer1.className = ('btc1');
  answer1.id = ('btc')
  quizFormEl.appendChild(answer1);

  var answer2 = document.createElement('button');
  answer2.textContent = '2. Function';
  answer2.className = ('btc2');
  answer2.id = ('btc')
  quizFormEl.appendChild(answer2);

  var answer3 = document.createElement('button');
  answer3.textContent = '3. Boolean';
  answer3.className = ('btc3');
  answer3.id = ('btc')
  quizFormEl.appendChild(answer3);

  var answer4 = document.createElement('button');
  answer4.textContent = '4. Variable';
  answer4.className = ('btc4');
  answer4.id = ('btc')
  quizFormEl.appendChild(answer4);

  answer1.addEventListener('click', penalty)
  answer1.addEventListener('click', end)

  answer2.addEventListener('click', penalty)
  answer2.addEventListener('click', end)

  answer3.addEventListener('click', reward)
  answer3.addEventListener('click', end)

  answer4.addEventListener('click', penalty)
  answer4.addEventListener('click', end)
}

/*Question 4*/
var question4 = function() {
  quizFormEl.innerHTML = "";

  var question = document.createElement('h1');
  question.textContent = 'How do you create a flexbox?';
  quizFormEl.appendChild(question);

  var answer1 = document.createElement('button');
  answer1.textContent = '1. display: flex;';
  answer1.className = ('btc1');
  answer1.id = ('btc')
  quizFormEl.appendChild(answer1);

  var answer2 = document.createElement('button');
  answer2.textContent = '2. display: flexbox;';
  answer2.className = ('btc2');
  answer2.id = ('btc')
  quizFormEl.appendChild(answer2);

  var answer3 = document.createElement('button');
  answer3.textContent = '3. display: box;';
  answer3.className = ('btc3');
  answer3.id = ('btc')
  quizFormEl.appendChild(answer3);

  var answer4 = document.createElement('button');
  answer4.textContent = '4. display: inline;';
  answer4.className = ('btc4');
  answer4.id = ('btc')
  quizFormEl.appendChild(answer4);

  answer1.addEventListener('click', reward)
  answer1.addEventListener('click', question5)

  answer2.addEventListener('click', penalty)
  answer2.addEventListener('click', question5)

  answer3.addEventListener('click', penalty)
  answer3.addEventListener('click', question5)

  answer4.addEventListener('click', penalty)
  answer4.addEventListener('click', question5)
}

/*Question 3*/
var question3 = function() {
  quizFormEl.innerHTML = "";

  var question = document.createElement('h1');
  question.textContent = 'Which statement correctly stores data into the Web Storage API?';
  quizFormEl.appendChild(question);

  var answer1 = document.createElement('button');
  answer1.textContent = '1. localStorage.getItem("lunch", "sandwich");';
  answer1.className = ('btc1');
  answer1.id = ('btc')
  quizFormEl.appendChild(answer1);

  var answer2 = document.createElement('button');
  answer2.textContent = '2. localStorage.setItem("lunch", "sandwich");';
  answer2.className = ('btc2');
  answer2.id = ('btc')
  quizFormEl.appendChild(answer2);

  var answer3 = document.createElement('button');
  answer3.textContent = '3. getItem.localStorage.("lunch", "sandwich");';
  answer3.className = ('btc3');
  answer3.id = ('btc')
  quizFormEl.appendChild(answer3);

  var answer4 = document.createElement('button');
  answer4.textContent = '4. setItem.localStorage("lunch", "sandwich");';
  answer4.className = ('btc4');
  answer4.id = ('btc')
  quizFormEl.appendChild(answer4);

  answer1.addEventListener('click', penalty)
  answer1.addEventListener('click', question4)

  answer2.addEventListener('click', reward)
  answer2.addEventListener('click', question4)

  answer3.addEventListener('click', penalty)
  answer3.addEventListener('click', question4)

  answer4.addEventListener('click', penalty)
  answer4.addEventListener('click', question4)
}


/*Question 2*/
var question2 = function() {
  quizFormEl.innerHTML = "";

  var question = document.createElement('h1');
  question.textContent = 'A special variable which can hold more than one value is called:';
  quizFormEl.appendChild(question);

  var answer1 = document.createElement('button');
  answer1.textContent = '1. List';
  answer1.className = ('btc1');
  answer1.id = ('btc')
  quizFormEl.appendChild(answer1);

  var answer2 = document.createElement('button');
  answer2.textContent = '2. Function';
  answer2.className = ('btc2');
  answer2.id = ('btc')
  quizFormEl.appendChild(answer2);

  var answer3 = document.createElement('button');
  answer3.textContent = '3. Boolean';
  answer3.className = ('btc3');
  answer3.id = ('btc')
  quizFormEl.appendChild(answer3);

  var answer4 = document.createElement('button');
  answer4.textContent = '4. Array';
  answer4.className = ('btc4');
  answer4.id = ('btc')
  quizFormEl.appendChild(answer4);

  answer1.addEventListener('click', penalty)
  answer1.addEventListener('click', question3)

  answer2.addEventListener('click', penalty)
  answer2.addEventListener('click', question3)

  answer3.addEventListener('click', penalty)
  answer3.addEventListener('click', question3)

  answer4.addEventListener('click', reward)
  answer4.addEventListener('click', question3)
}

/*Question 1*/
var question1 = function() {
  quizFormEl.innerHTML = "";
  score = 0;

  var question = document.createElement('h1');
  question.textContent = 'Which of these values is NOT considered false?';
  quizFormEl.appendChild(question);

  var answer1 = document.createElement('button');
  answer1.textContent = '1. 0';
  answer1.className = ('btc1');
  answer1.id = ('btc')
  quizFormEl.appendChild(answer1);

  var answer2 = document.createElement('button');
  answer2.textContent = '2. "0"';
  answer2.className = ('btc2');
  answer2.id = ('btc');
  quizFormEl.appendChild(answer2);

  var answer3 = document.createElement('button');
  answer3.textContent = '3. null';
  answer3.className = ('btc3');
  answer3.id = ('btc')
  quizFormEl.appendChild(answer3);

  var answer4 = document.createElement('button');
  answer4.textContent = '4. ""';
  answer4.className = ('btc4');
  answer4.id = ('btc')
  quizFormEl.appendChild(answer4);

  answer1.addEventListener('click', penalty)
  answer1.addEventListener('click', loadScores)

  answer2.addEventListener('click', reward)
  answer2.addEventListener('click', question2)

  answer3.addEventListener('click', penalty)
  answer3.addEventListener('click', question2)

  answer4.addEventListener('click', penalty)
  answer4.addEventListener('click', question2)
}

/*This takes you back to the initial screen.*/
var homeScreen = function () {

  quizFormEl.innerHTML = "";

  var header = document.createElement('h1')
  header.textContent = 'Coding Quiz Challenge'

  var paragraph = document.createElement('p');
  paragraph.textContent = "It had become a far too common an event in her life. She has specifically placed the key to the box in a special place so that she wouldn't lose it and know exactly where it was when the key was needed. Now that she needed to open the box, she had absolutely no idea where that special spot she placed the key might be."

  var button = document.createElement('button');
  button.className = ('btc');
  button.id = ('btc');
  button.textContent = 'Start';

  button.addEventListener('click', question1)
  button.addEventListener('click', timer)

  quizFormEl.appendChild(header);
  quizFormEl.appendChild(paragraph);
  quizFormEl.appendChild(button);
}

/*A end screen that saves their score locally*/
var end = function() {
  counter = 1;
  quizFormEl.innerHTML = "";

  highScoreSave = localStorage.getItem("highScoreSave");
  highScoreSave = JSON.parse(highScoreSave);

  if (!highScoreSave) {
    highScoreSave = [];
  }

  var done = document.createElement('h1');
  done.textContent = 'All Done!';
  quizFormEl.appendChild(done);

  var highscore = document.createElement('p');
  highscore.textContent = ('Your score is ' + score)

  var scoreSave = document.createElement('div')
  scoreSave.className = 'scoreForm';

  var initials = document.createElement('input')
  initials.placeholder = 'Initials';
  initials.className = 'saveScore';
  initials.type= 'text';

  var submitScore = document.createElement('button')
  submitScore.className = ('submit');
  submitScore.id = ('bts')
  submitScore.textContent = ('Submit')

  quizFormEl.appendChild(highscore)
  quizFormEl.appendChild(scoreSave)
  scoreSave.appendChild(initials)
  scoreSave.appendChild(submitScore)

  submitScore.addEventListener('click', save)
}


/*Saves the initial and score*/
var save = function() {
  var newScore = document.querySelector("input").value;

  var youScore = document.createAttribute('p')
  youScore.textContent =  (newScore + ':' + '('+ score +')');

  highScoreSave.push(youScore.value);

  localStorage.setItem("highScoreSave", JSON.stringify(highScoreSave));

  loadScores()
 
}

/*Diplays the highscores*/
var loadScores = function() {

  quizFormEl.innerHTML = "";

  var header = document.createElement('h1')
  header.textContent = 'HighScores';

  quizFormEl.appendChild(header);

  highScoreSave = localStorage.getItem("highScoreSave");
  highScoreSave = JSON.parse(highScoreSave);

  if (!highScoreSave) {
    highScoreSave = [];
  }

  for (var i = 0; i < highScoreSave.length; i++) {
    score = document.createElement('p');
    score.textContent = (highScoreSave[i]);
    score.className = 'thescores';
    quizFormEl.appendChild(score);
  }

  var div = document.createElement('div');
  div.className = ('loadDiv');

  var goBack = document.createElement('button');
  goBack.textContent = 'Go Back';
  goBack.className = ('load')

  var clear = document.createElement('button');
  clear.textContent = 'Clear';
  clear.className = ('load')

  quizFormEl.appendChild(div)
  div.appendChild(goBack);
  div.appendChild(clear);

  goBack.addEventListener('click', homeScreen)
  clear.addEventListener('click', remove)
}

var remove = function() {
  localStorage.removeItem("highScoreSave");
  
  loadScores()
}

startEl.addEventListener('click', question1)
startEl.addEventListener('click', timer)