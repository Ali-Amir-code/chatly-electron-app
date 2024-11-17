const messageInput = document.getElementById('message');
const msgSendBtn = document.getElementById('send');
const responseDiv = document.getElementById('response');

msgSendBtn.addEventListener('click', () => {
    handleData(messageInput.value);
    messageInput.value = '';
    messageInput.focus();
});

async function handleData(data) {
    const response = await window.data.sendMsg(data);
    responseDiv.innerText = response;
}