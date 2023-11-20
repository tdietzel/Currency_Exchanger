import printError from "./index";

export default class Exchange {
  static async getCurrencyRates(exchange) {
    try {
      // https://www.exchangerate-api.com/docs/overview
      const response = await fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/${exchange}`);
      if (!response.ok) {
        throw Error(`Failed to fetch currency rates. Status: ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      printError(error);
      return error;
    }
  }
}
