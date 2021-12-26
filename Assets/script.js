var startEl = document.querySelector('#btsb');
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
  quizFormEl.appendChild(answer1);

  var answer2 = document.createElement('button');
  answer2.textContent = '2. Function';
  answer2.className = ('btc2');
  quizFormEl.appendChild(answer2);

  var answer3 = document.createElement('button');
  answer3.textContent = '3. Boolean';
  answer3.className = ('btc3');
  quizFormEl.appendChild(answer3);

  var answer4 = document.createElement('button');
  answer4.textContent = '4. Variable';
  answer4.className = ('btc4');
  quizFormEl.appendChild(answer4);

  answer1.addEventListener('click', penalty)
  answer1.addEventListener('click', question6)

  answer2.addEventListener('click', penalty)
  answer2.addEventListener('click', question6)

  answer3.addEventListener('click', reward)
  answer3.addEventListener('click', question6)

  answer4.addEventListener('click', penalty)
  answer4.addEventListener('click', question6)
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
  quizFormEl.appendChild(answer1);

  var answer2 = document.createElement('button');
  answer2.textContent = '2. display: flexbox;';
  answer2.className = ('btc2');
  quizFormEl.appendChild(answer2);

  var answer3 = document.createElement('button');
  answer3.textContent = '3. display: box;';
  answer3.className = ('btc3');
  quizFormEl.appendChild(answer3);

  var answer4 = document.createElement('button');
  answer4.textContent = '4. display: inline;';
  answer4.className = ('btc4');
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
  quizFormEl.appendChild(answer1);

  var answer2 = document.createElement('button');
  answer2.textContent = '2. localStorage.setItem("lunch", "sandwich");';
  answer2.className = ('btc2');
  quizFormEl.appendChild(answer2);

  var answer3 = document.createElement('button');
  answer3.textContent = '3. getItem.localStorage.("lunch", "sandwich");';
  answer3.className = ('btc3');
  quizFormEl.appendChild(answer3);

  var answer4 = document.createElement('button');
  answer4.textContent = '4. setItem.localStorage("lunch", "sandwich");';
  answer4.className = ('btc4');
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
  question.textContent = 'A special variable which can hold more than one value is called a:';
  quizFormEl.appendChild(question);

  var answer1 = document.createElement('button');
  answer1.textContent = '1. List';
  answer1.className = ('btc1');
  quizFormEl.appendChild(answer1);

  var answer2 = document.createElement('button');
  answer2.textContent = '2. Function';
  answer2.className = ('btc2');
  quizFormEl.appendChild(answer2);

  var answer3 = document.createElement('button');
  answer3.textContent = '3. Boolean';
  answer3.className = ('btc3');
  quizFormEl.appendChild(answer3);

  var answer4 = document.createElement('button');
  answer4.textContent = '4. Array';
  answer4.className = ('btc4');
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

  var question = document.createElement('h1');
  question.textContent = 'Which of these values is NOT considered false?';
  quizFormEl.appendChild(question);

  var answer1 = document.createElement('button');
  answer1.textContent = '1. 0';
  answer1.className = ('btc1');
  quizFormEl.appendChild(answer1);

  var answer2 = document.createElement('button');
  answer2.textContent = '2. "0"';
  answer2.className = ('btc2');
  quizFormEl.appendChild(answer2);

  var answer3 = document.createElement('button');
  answer3.textContent = '3. null';
  answer3.className = ('btc3');
  quizFormEl.appendChild(answer3);

  var answer4 = document.createElement('button');
  answer4.textContent = '4. ""';
  answer4.className = ('btc4');
  quizFormEl.appendChild(answer4);

  answer1.addEventListener('click', penalty)
  answer1.addEventListener('click', question2)

  answer2.addEventListener('click', reward)
  answer2.addEventListener('click', question2)

  answer3.addEventListener('click', penalty)
  answer3.addEventListener('click', question2)

  answer4.addEventListener('click', penalty)
  answer4.addEventListener('click', question2)
}

startEl.addEventListener('click', question1)
startEl.addEventListener('click', timer)