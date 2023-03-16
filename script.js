const btnEl = document.getElementById("btn");
const advice_id = document.getElementById("advice_id");
const advice = document.getElementById("advice");

const options = {
  method: "GET",
};

const apiURL = "https://api.adviceslip.com/advice";

async function getAdvice() {
  const response = await fetch(apiURL, options);
  const data = await response.json();

  advice_id.innerText = "Advice #" + data.slip.id;
  function first() {
    if (data.slip.advice.length > 100) {
      var change = document.getElementById("advice");
      change.style.fontSize = "1.4rem";
      advice.innerText = '"' + data.slip.advice + '"';
    } else {
      advice.innerText = '"' + data.slip.advice + '"';
    }
  }
  first();
}
btnEl.addEventListener("click", getAdvice);
