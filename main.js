const ws = new WebSocket("ws://localhost:3000");

ws.onmessage = (event) => {
    const chat = document.getElementById("chat");
    chat.innerHTML += `<p>${event.data}</p>`;
    chat.scrollTop = chat.scrollHeight;
};

function sendMessage() {
    const input = document.getElementById("message");
    if (input.value.trim()) {
        ws.send(input.value);
        input.value = "";
    }
}