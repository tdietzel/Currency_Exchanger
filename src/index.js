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

async function getExchangeDetails() {
  try {
    const response = await Exchange.getCurrencyRates();
    printCurrencyRate(response);
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