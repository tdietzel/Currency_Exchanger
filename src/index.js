import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Exchange from './getExchange';

// UI
export default function printError(error) {
  document.querySelector("p#errorHandling").innerText = `Error Name: ${error.name} \n Error Message: ${error.message}`;
}

function printResults(result) {
  document.querySelector("p#results").innerText = result;
}

// Business Logic

function calculateExchange(selectedExchangeTo, response) {
  const currencyAmount = document.querySelector("input#userCurrencyAmount").value;
  switch (selectedExchangeTo) {
  case 'AED': return currencyAmount * response.conversion_rates.AED;
  case 'AFN': return currencyAmount * response.conversion_rates.AFN;
  case 'ALL': return currencyAmount * response.conversion_rates.ALL;
  case 'AMD': return currencyAmount * response.conversion_rates.AMD;
  case 'ANG': return currencyAmount * response.conversion_rates.ANG; 
  }
}

function getExchangeRate(response) {
  const selectedExchangeTo = document.querySelector("#exchangeToDropDown").value;
  const result = calculateExchange(selectedExchangeTo, response);
  printResults(result);
}

async function getExchangeDetails() {
  try {
    const response = await Exchange.getCurrencyRates();
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