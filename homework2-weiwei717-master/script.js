// TODO(you): Write the JavaScript necessary to complete the homework.

// You can access the RESULTS_MAP from "constants.js" in this file since
// "constants.js" has been included before "script.js" in index.html.

var a, b, c, max;
var Count = [0, 0, 0, 0, 0, 0, 0, 0, 0];
a = 0;
b = 0;
c = 0;
max = 0;

function test_start(event) {
  //console.log(event);
  var y;
  x = event.currentTarget;
  y = x.dataset.questionId;
  //console.log(x);
  switch (y) {
    case "one":
      //console.log("XXX");
      a = 1;
      break;
    case "two":
      b = 1;
      break;
    case "three":
      c = 1;
      break;
  }
  for (var i = 0; i < 27; i++) {
    if (ch_h[i].dataset.questionId === y) {
      //console.log("qOwo");
      re_S(ch_h[i]);
    }
  }
  ch_S(x);
  if (a > 0 && b > 0 && c > 0) {
    test_end();
  }
}

function ch_S(space) //change div to selected
{
  space.style.opacity = "1";
  space.style.background = '#cfe3ff';
  space.getElementsByClassName("checkbox")[0].src = "images/checked.png";
  switch (space.dataset.choiceId) {
    case "blep":
      Count[0] += 1;
      break;
    case "burger":
      Count[1] += 1;
      break;
    case "cart":
      Count[2] += 1;
      break;
    case "dopey":
      Count[3] += 1;
      break;
    case "happy":
      Count[4] += 1;
      break;
    case "nerd":
      Count[5] += 1;
      break;
    case "shy":
      Count[6] += 1;
      break;
    case "sleeping":
      Count[7] += 1;
      break;
    case "sleepy":
      Count[8] += 1;
      break;
  }
}

function re_S(space) {
  //console.log("POwo");
  space.style.opacity = "0.6";
  const image = document.createElement('img');
  image.src = "images/unchecked.png";
  if (space.getElementsByClassName("checkbox")[0].src != image.src) {
    space.style.background = '#f4f4f4';
    space.getElementsByClassName("checkbox")[0].src = image.src;
    for (i = 0; i < 9; i++) {
      Count[i] = 0;
    }
  }
}

function test_end() {
  var ans;
  for (i = 0; i < 9; i++) {
    if (Count[i] > max) {
      max = Count[i];
      ans = i;
    }
  }
  for (const choice of ch_h) {
    choice.removeEventListener('click', test_start);
  }
  const articleContainer = document.querySelector('article');
  const rSection = document.createElement('section');
  rSection.classList.add('result');
  articleContainer.appendChild(rSection);
  const resultContainer = document.querySelector('.result');
  switch (ans) {
    case 0:
      result = "blep";
      break;
    case 1:
      result = "burger";
      break;
    case 2:
      result = "cart";
      break;
    case 3:
      result = "dopey";
      break;
    case 4:
      result = "happy";
      break;
    case 5:
      result = "nerd";
      break;
    case 6:
      result = "shy";
      break;
    case 7:
      result = "sleeping";
      break;
    case 8:
      result = "sleepy";
      break;
  }
  const header = document.createElement('h1');
  header.textContent = 'You got: ' + RESULTS_MAP[result].title;

  const content = document.createElement('p');
  content.textContent = RESULTS_MAP[result].contents;

  const resultButton = document.createElement('button');
  resultButton.textContent = 'Restart quiz';
  resultButton.addEventListener('click', reload);

  resultContainer.appendChild(header);
  resultContainer.appendChild(content);
  resultContainer.appendChild(resultButton);
}

function reload() {
  window.location.reload();
}

const ch_h = document.querySelectorAll('section.choice-grid > div');
for (const choice of ch_h) {
  choice.addEventListener('click', test_start);
}
