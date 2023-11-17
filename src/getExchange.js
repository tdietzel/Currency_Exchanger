export default class Exchange {
  static async getCurrencyRates() {
    try {
      const response = await fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/USD`);
      if (!response.ok) {
        throw Error(`Failed to fetch currency rates. Status: ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      document.querySelector("p#errorHandling").innerText = `Error Name: ${error.name} \n Error Message: ${error.message}`;
      return error;
    }
  }
}