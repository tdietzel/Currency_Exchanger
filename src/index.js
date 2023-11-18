import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Exchange from './getExchange';
import calculateExchange from './calcExchange';

// UI
export default function printError(error) {
  document.querySelector("p#errorHandling").innerText = `Error Name: ${error.name} \n Error Message: ${error.message}`;
}

function printResults(result) {
  document.querySelector("p#results").innerText = result;
}

// Business Logic
let response = null;

function getExchangeRate(response) {
  const selectedExchangeTo = document.querySelector("#exchangeToDropDown").value;
  const result = calculateExchange(selectedExchangeTo, response);
  printResults(result);
}

async function getExchangeDetails() {
  try {
    if(!response) {
      const selectedExchangeFrom = document.querySelector("#exchangeFromDropDown").value;
      response = await Exchange.getCurrencyRates(selectedExchangeFrom);
    }
    getExchangeRate(response);
  } catch (error) {
    document.querySelector("p#results").innerText = `Error: ${error.message}`;
  }
}

function handleFormSubmit(e) {
  e.preventDefault();
  getExchangeDetails();
}

window.addEventListener("load", () => {
  document.querySelector("form#getExchange").addEventListener("submit", handleFormSubmit);
});