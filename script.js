const btnEl = document.getElementById("btn");
const advice_id = document.getElementById("advice_id");
const advice = document.getElementById("advice");

const options = {
    method: "GET"
};

const apiURL = "https://api.adviceslip.com/advice";



async function getAdvice() {
  const response = await fetch (apiURL, options);
  const data = await response.json();


  advice_id.innerText = ("Advice # " + data.slip.id);
  advice.innerText =('"' + data.slip.advice + '"');
}

btnEl.addEventListener("click", getAdvice);
