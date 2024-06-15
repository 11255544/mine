document.addEventListener('DOMContentLoaded', () => {
    const chatWindow = document.getElementById('chatWindow');
    const messageInput = document.getElementById('messageText');
    const sendMessageBtn = document.getElementById('sendMessage');

 //první zpráva
    setTimeout(() => {
        appendMessage('Bot', 'Vítejte v chatu!', 'received');
        chatWindow.scrollTop = chatWindow.scrollHeight;
    }, 500);
//tlačítko na odeslačení
    sendMessageBtn.addEventListener('click', () => {
        sendMessage();
    });
//input
    messageInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });
//input tlačítka inputu
    function sendMessage() {
        const message = messageInput.value.trim();
        if (message !== '') {
            appendMessage('Vy', message, 'sent');
            respondToMessage(message);
            messageInput.value = '';
            chatWindow.scrollTop = chatWindow.scrollHeight;
        }
    }
//brikule v html
    function appendMessage(user, text, type) {
        const messageElement = document.createElement('div');
        messageElement.classList.add('message', type);
        messageElement.innerHTML = `<p><span class="user">${user}:</span> ${text}</p>`;
        chatWindow.appendChild(messageElement);
    }
//odpovídání na zprávy bez ohledu na malá písmena
    function respondToMessage(message) {
        const lowercaseMessage = message.toLowerCase();
        let response = '';
//odpovědi na input
        if (lowercaseMessage.includes('ahoj') || lowercaseMessage.includes('dobrý den')) {
            response = 'Dobrý den!';
        } else if (lowercaseMessage.includes('jak se máš')) {
            response = 'Jsem jenom bot, ale díky za otázku!';
        } else if (lowercaseMessage.includes('na shledanou') || lowercaseMessage.includes('sbohem')) {
            response = 'Na shledanou!';
        }
        else if (lowercaseMessage.includes(':(') || lowercaseMessage.includes('sbohem')) {
            response = 'Co se stalo?';
        }
                else if (lowercaseMessage.includes('umřel mi pes') || lowercaseMessage.includes('umřela mi kočka')) {
            response = 'Womp, womp';
        }
        else {
            response = 'Omlouvám se, nerozumím.';
        }

        setTimeout(() => {
            appendMessage('Bot', response, 'received');
            chatWindow.scrollTop = chatWindow.scrollHeight;
        }, 1000);
    }
});
