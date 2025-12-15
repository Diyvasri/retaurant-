document.getElementById('submit-btn').addEventListener('click', function() {
    const userInput = document.getElementById('user-input').value;
    if (userInput.trim() !== "") {
        appendMessage(userInput, 'user-message');
        document.getElementById('user-input').value = "";
        setTimeout(() => {
            const botResponse = getBotResponse();
            appendMessage(botResponse, 'bot-message');
        }, 1000);
    }
});

function appendMessage(message, className) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('message', className);
    messageElement.textContent = message;
    document.getElementById('chat-box').appendChild(messageElement);
    document.getElementById('chat-box').scrollTop = document.getElementById('chat-box').scrollHeight;
}

function getBotResponse() {
    const responses = [
        "I'm here to help you!",
        "That's interesting. Tell me more.",
        "Sorry, I didn't quite get that.",
        "How can I assist you today?",
        "I'm learning new things every day!",
        "Good question! Let me think...",
        "Sounds like a plan!",
        "I don't have an answer to that yet, but I'll learn!"
    ];
    return responses[Math.floor(Math.random() * responses.length)];
}