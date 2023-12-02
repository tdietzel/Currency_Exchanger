export default function calculateExchange(selectedExchangeTo, response) {
  const currencyAmount = document.querySelector("input#userCurrencyAmount").value;
  const conversion = response.conversion_rates;
  
  if (!conversion[selectedExchangeTo]) return null; // if the conversion object doesn't have the currency return null
  return currencyAmount * conversion[selectedExchangeTo]; // if it does, multiply conversion rate by currency and return that
}