let messages = []; // Array to store messages

function sendMessage() {
    const nameInput = document.getElementById("nameInput");
    const messageInput = document.getElementById("messageInput");
    const name = nameInput.value.trim();
    const message = messageInput.value.trim();

    if (name && message) {
        const fullMessage = `${name}: ${message}`;
        messages.push(fullMessage);  // Store the new message
        messageInput.value = "";  // Clear input box
        displayMessages();        // Display messages
    } else {
        alert("Please enter both your name and message.");
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

    // Scroll to the latest message
    chatBox.scrollTop = chatBox.scrollHeight;
}
