import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Exchange from './getExchange';

function getExchangeRate(selectedExchangeTo, response) {
  const currencyAmount = document.querySelector("input#userCurrencyAmount").value;
  switch (selectedExchangeTo) {
  case 'AED': return currencyAmount * response.conversion_rates.AED;
  case 'AFN': return currencyAmount * response.conversion_rates.AFN;
  case 'ALL': return currencyAmount * response.conversion_rates.ALL;
  case 'AMD': return currencyAmount * response.conversion_rates.AMD;
  case 'ANG': return currencyAmount * response.conversion_rates.ANG; 
  }
}

function printCurrencyRate(response) {
  const selectedExchangeTo = document.querySelector("#exchangeToDropDown").value;
  const result = getExchangeRate(selectedExchangeTo, response);
  document.querySelector("p#results").innerText = result;
}

function printError() {
  document.querySelector("p#results").innerText = "Error";
}

async function getExchangeDetails() {
  const response = await Exchange.getCurrencyRates();

  if(!response) {
    printError();
  } else {
    printCurrencyRate(response);
  }
}

function handleFormSubmit(e) {
  e.preventDefault();
  getExchangeDetails();
}

window.addEventListener("load", () => {
  document.querySelector("form#getExchange").addEventListener("submit", handleFormSubmit);
});