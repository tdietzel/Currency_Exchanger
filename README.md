# Currency Exchange Web Application
#### By Trent Dietzel

## Table of Contents
- [About](#about)
- [Technologies Used](#technologies-used)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Known Bugs](#known-bugs)
- [License](#license)
- [Contact](#contact)

## About

Currency Exchange is a web application that allows users to convert an amount in US dollars (USD) to various currencies around the world. The application provides a user-friendly interface for entering the amount in USD, selecting the target currency, and obtaining the converted amount.

The primary functionality of the application includes:
- Real-time currency conversion using the ExchangeRate-API.
- User-friendly interface with input fields and dropdowns for ease of use.
- Error handling to provide clear messages in case of issues during the conversion process.

## Technologies Used
- HTML
- CSS (Bootstrap for styling)
- JavaScript
- NPM (Node Package Manager): for package management
- Lint: for code quality and style checking
- Webpack: for bundling and building the project
- Jest: for testing the JavaScript code

## Features
- **User-Friendly Interface:** The application provides a simple and user-friendly interface for entering the amount in USD and selecting the target currency.
- **Real-time Exchange Rates:** The application fetches real-time exchange rates from the [ExchangeRate-API](https://www.exchangerate-api.com/) to ensure accurate and up-to-date currency conversion.
- **Error Handling:** In case of any errors during the conversion process, the application provides clear error messages to help users understand and troubleshoot the issue.

## Installation

Follow these steps to set up the project locally:
1. Open Git BASH [Download Link](https://gitforwindows.org/)
2. Clone the repository to your local machine:
   ```bash
   git clone https://github.com/tdietzel22/Currency_Exchanger
   ```
3. Open the project directory:
   ```bash
   cd Currency_Exchanger
   ```
4. Open in a code editor like __Visual Studio Code__.
5. Open the VS Code terminal and enter this command to install needed dependencies:
   ```bash
   npm install dotenv-webpack@8.0.1 --save-dev
   ```
6. Add a .env file to the top of the project directory
   ```bash
   git touch .env
   ```
7. Open the new .env file and enter in:
   ```bash
   API_Key=
   ```
8. Visit the [ExchangeRate-API site](https://www.exchangerate-api.com/) Input your email address and click the "Get Free Key" button.
9. Once you make an account and are on the dashboard copy the **"Your API Key:"** and paste it after API_Key=.
8. Then run to view in browser or use for further development:
   ```bash
   npm run start
   ```

## Usage

To use the Currency Exchange application:
1. Enter the amount in USD in the provided input field.
2. Select the desired currency to convert to from the dropdown menu.
3. Click the 'Go!' button to initiate the conversion process.
4. View the converted amount below the form. In case of any errors, an error message will be displayed.

## Contributing

I welcome contributions to improve the project. If you'd like to contribute, please follow these guidelines:
1. Fork the project repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and test thoroughly.
4. Commit your changes with a descriptive commit message.
5. Push your branch to your forked repository.
6. Create a pull request to the main repository.

## Known Bugs

* _N/A_

## License
This project is licensed under the MIT License. See the LICENSE file for details.

## Contact
For any questions, suggestions, or inquiries, please contact **Trent Dietzel** at _dietzelbiz@outlook.com_.
