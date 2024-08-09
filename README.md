# Weather Chatbot

Welcome to the Weather bot! This project is a simple full-stack application that allows users to get real-time weather information for any location in the world. The chatbot interface is designed with a sleek, modern UI and leverages an external weather API to fetch and display weather data.

## Features

- **Real-Time Weather Information**: Get current weather details for any location by simply typing the name of the place.
- **Responsive Design**: The chatbot interface is fully responsive, ensuring a great experience on both desktop and mobile devices.
- **Custom Animations**: Includes a smooth slide-up animation for the chatbox on page load, creating a dynamic user experience.
- **Styled User Interface**: The UI features a bold blue-green gradient and matching user message bubbles that enhance the overall aesthetics of the application.

## Technologies Used

- **Front-End**:
  - HTML5
  - CSS3
  - JavaScript
- **Back-End**:
  - Node.js
  - Express.js
- **API**:
  - OpenWeatherMap API

## Setup Instructions

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (which includes npm)

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/weather-chatbot.git
   cd weather-chatbot

2. **Install dependencies**:
   ```bash
   npm install

3. **Start the server**:
   ```bash
   node server.mjs

3. **Access the application**:
Open your browser and go to `http://localhost:3000`

### How to Use

**Ask for Weather**: Simply type the name of the place you want the weather information for into the input box and hit "Send." The chatbot will respond with the current weather for that location.

### Project Structure

**index.html**: The main HTML file for the frontend.
**styles.css**: Contains all the CSS styles for the project.
**scripts.js**: JavaScript file handling front-end logic.
**server.mjs**: Node.js server file to handle requests and API integration