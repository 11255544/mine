document.addEventListener('DOMContentLoaded', () => {
    const channels = document.querySelectorAll('.channel');
    const chatWindow = document.getElementById('chatWindow');
    const messageInput = document.getElementById('messageText');
    const sendMessageBtn = document.getElementById('sendMessage');
    const currentChannelElem = document.getElementById('currentChannel');
    let activeChannel = 'General';

    channels.forEach(channel => {
        channel.addEventListener('click', () => {
            channels.forEach(c => c.classList.remove('active'));
            channel.classList.add('active');
            activeChannel = channel.textContent.trim();
            currentChannelElem.textContent = activeChannel;
            loadMessages(activeChannel);
        });
    });

    sendMessageBtn.addEventListener('click', () => {
        sendMessage();
    });

    messageInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });

    function sendMessage() {
        const message = messageInput.value.trim();
        if (message !== '') {
            const messageElement = document.createElement('div');
            messageElement.classList.add('message');
            messageElement.innerHTML = `<p><span class="user">You:</span> ${message}</p>`;
            chatWindow.appendChild(messageElement);
            respondToMessage(message);
            messageInput.value = '';
            chatWindow.scrollTop = chatWindow.scrollHeight;
        }
    }

    function loadMessages(channel) {
        chatWindow.innerHTML = `<div class="message"><p><span class="user">System:</span> Welcome to the ${channel} channel!</p></div>`;
    }

    function respondToMessage(message) {
    const lowercaseMessage = message.toLowerCase();
    let response = '';

    if (lowercaseMessage.includes('hello') || lowercaseMessage.includes('hi')) {
        const responses = ['Hello there!', 'Hi!', 'Hey!'];
        response = responses[Math.floor(Math.random() * responses.length)];
    } else if (lowercaseMessage.includes('how are you')) {
        const responses = ['I\'m just a bot, but thanks for asking!', 'I\'m doing well, thanks!', 'Feeling good, how about you?'];
        response = responses[Math.floor(Math.random() * responses.length)];
    } else if (lowercaseMessage.includes('goodbye') || lowercaseMessage.includes('bye')) {
        const responses = ['Goodbye!', 'See you later!', 'Bye! Have a great day!'];
        response = responses[Math.floor(Math.random() * responses.length)];
    } else {
        const responses = ['I\'m sorry, I didn\'t understand that.', 'Could you please repeat that?', 'I\'m not sure what you mean.'];
        response = responses[Math.floor(Math.random() * responses.length)];
    }

    setTimeout(() => {
        const responseElement = document.createElement('div');
        responseElement.classList.add('message');
        responseElement.innerHTML = `<p><span class="user">Bot:</span> ${response}</p>`;
        chatWindow.appendChild(responseElement);
        chatWindow.scrollTop = chatWindow.scrollHeight;
    }, 1000);
}
