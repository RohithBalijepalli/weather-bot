document.getElementById("sendButton").addEventListener("click", function() {
    sendUserMessage();
});

document.getElementById("userInput").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        sendUserMessage();
    }
});

function sendUserMessage() {
    const userInput = document.getElementById("userInput").value;
    if (userInput) {
        displayMessage(userInput, "user-message");
        showTypingIndicator();
        getWeather(userInput);
        document.getElementById("userInput").value = "";
    }
}

function displayMessage(message, className) {
    const chatbox = document.getElementById("chatbox");
    const messageDiv = document.createElement("div");
    messageDiv.className = `message ${className}`;
    messageDiv.textContent = message;
    chatbox.appendChild(messageDiv);
    chatbox.scrollTop = chatbox.scrollHeight;
}

function showTypingIndicator() {
    const chatbox = document.getElementById("chatbox");
    const typingDiv = document.createElement("div");
    typingDiv.className = "message bot-message typing";
    typingDiv.textContent = "Typing...";
    chatbox.appendChild(typingDiv);
    chatbox.scrollTop = chatbox.scrollHeight;

    setTimeout(() => {
        typingDiv.remove();
    }, 600);
}

function getWeather(place) {
    fetch(`/weather?place=${place}`)
        .then(response => response.json())
        .then(data => {
            if (data.error) {
                displayMessage(data.error, "bot-message");
            } else {
                const weatherInfo = `The weather in ${place} is ${data.weather} with a temperature of ${data.temperature}°C.`;
                displayMessage(weatherInfo, "bot-message");
            }
        })
        .catch(error => {
            displayMessage("Sorry, an error occurred. Please try again.", "bot-message");
        });
}
