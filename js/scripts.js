var answers = ["1", "3", "2", "4"] // these are the correct answers for the questions
  total = answers.length; // assigns the number of questions to a variable

function getCheckedValue(radioName) {
  var radios = document.getElementsByName(radioName); // returns a list of all radio buttons
  for (var x = 0; x < radios.length; x++) // a for loop to traverse the list of radio buttons
    if (radios[x].checked) return radios[x].value; // returns the selected value for each question
}

function getScore() {
  var score = 0;
  for (var i = 0; i < total; i++) // a for loop for each question and answer
    if (getCheckedValue("question" + i) === answers[i]) score += 1; // increments the score variable when an answer is correct
  return score;
}

function returnScore() {
  document.getElementById("score").innerHTML = getScore() + "/" + total; // prints the score to a span element on the page
}
