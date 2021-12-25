var timerEl = document.querySelector('#btsb');
var theTimeEl = document.querySelector("#the-time")


var timer = function () {
  event.preventDefault();
  var counter = 60;
  var interval = setInterval(function() {
    theTimeEl.innerHTML = --counter;
    if (counter <= 0) {
      clearInterval(interval)
    }else {
    }
  }, 1000);
};

timerEl.addEventListener('click', timer)