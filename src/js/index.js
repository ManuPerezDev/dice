const button1 = document.getElementById("button-1");
const button2 = document.getElementById("button-2");
const button3 = document.getElementById("button-3");

const results = [];

button1.onclick = function () {
  const result = document.getElementById("result-1");
  result.innerHTML = diceRandomNumber();
};

button2.onclick = function () {
  const result = document.getElementById("result-2");
  result.innerHTML = diceRandomNumber();
};

button3.onclick = function () {
  const result = document.getElementById("result-3");
  result.innerHTML = diceRandomNumber();
};

const diceRandomNumber = function () {
  const number = Math.floor((Math.random() * 6) + 1);
  results.push(number);
  printResults();
  return number;
};

const printResults = function() {
  const list = document.getElementById("list");
  list.innerHTML = "";
  results.forEach(function (item) {
    const li = document.createElement("li");
    list.appendChild(li);

    li.innerHTML += item;
  });
}
