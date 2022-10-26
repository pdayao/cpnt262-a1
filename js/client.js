'use strict';

const button = document.querySelector('button');

button.addEventListener('click', function(e) {
  const yourName = prompt("What is your name?");

  document.body.innerHTML = "<h1> Greetings, " + yourName + "!</h1>";
});

