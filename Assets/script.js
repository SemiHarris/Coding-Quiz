var timerEl = document.querySelector('#btsb');
var scoreEl = document.querySelector('#btsc')
var theTimeEl = document.querySelector("#the-time")
var quizFormEl = document.querySelector('.quiz-form')
var bodyEl = document.querySelector('body')
var score = 0
var counter = 60;

/*The timer for the quiz*/
var timer = function () {
  event.preventDefault();
  var interval = setInterval(function() {
    theTimeEl.innerHTML = --counter;
    if (counter == 0) {
      clearInterval(interval)
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
  }, 1500);
}

var reward = function() {
  score = score + 10;

  var right = document.createElement('div');
  right.className = ('result');
  right.textContent = 'Correct!'
  bodyEl.appendChild(right);
  var rightEl = document.querySelector('.result')

  setTimeout(function (){
    rightEl.remove()
  }, 1500);
};

var score = function() {
  quizFormEl.innerHTML = "";

  var question = document.createElement('h1');
  question.textContent = 'This is a temporary question prompt';
  quizFormEl.appendChild(question);

  var answer1 = document.createElement('button');
  answer1.textContent = 'Answer1';
  answer1.className = ('btc1');
  quizFormEl.appendChild(answer1);

  var answer2 = document.createElement('button');
  answer2.textContent = 'Answer2';
  answer2.className = ('btc2');
  quizFormEl.appendChild(answer2);

  var answer3 = document.createElement('button');
  answer3.textContent = 'Answer3';
  answer3.className = ('btc3');
  quizFormEl.appendChild(answer3);

  var answer4 = document.createElement('button');
  answer4.textContent = 'Answer4';
  answer4.className = ('btc4');
  quizFormEl.appendChild(answer4);

  answer1.addEventListener('click', reward)

}

scoreEl.addEventListener('click', score)

scoreEl.addEventListener('click', timer)