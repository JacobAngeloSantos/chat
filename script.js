let messages = []; // Array to store messages

function sendMessage() {
    const messageInput = document.getElementById("messageInput");
    const message = messageInput.value;

    if (message) {
        messages.push(message);  // Store the new message
        messageInput.value = "";  // Clear input box
        displayMessages();        // Display messages
    }
}

function displayMessages() {
    const chatBox = document.getElementById("chatBox");
    chatBox.innerHTML = "";  // Clear the chat box
    
    // Display all messages
    messages.forEach(msg => {
        const msgElement = document.createElement("div");
        msgElement.textContent = msg;
        chatBox.appendChild(msgElement);
    });
}
