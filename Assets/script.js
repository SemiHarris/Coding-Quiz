var timerEl = document.querySelector('#btsb');

var timer = function () {
  event.preventDefault();
  var counter = 60;
  var interval = setInterval(function() {
    console.log(--counter)
    if (counter <= 0) {
      clearInterval(interval)
    }
  }, 1000);
};

timerEl.addEventListener('click', timer)