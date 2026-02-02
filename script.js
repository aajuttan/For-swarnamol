let messageIndex = 0;

const messages = [
    "Are you sure swarnamolee?",
    "Urppaanallo alle..",
    "Ente chakkara allee",
    "Onnoode aloikk",
    "Kndo nink no SNEHAM",
    "Pure Ahngaram",
    "FINE,Me Nirthi..",
    "Hehe,Mrythkk YES prnjoo..❤️"
];

function handleNoClick() {
    const noButton = document.querySelector(' .no-button');
    const yesButton = document.querySelector('.yes-button');

    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;

    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    // This hides the question and buttons
    document.querySelector('.container').style.display = 'none';
    
    // This shows the hidden thank you message
    document.getElementById('thankyou-message').style.display = 'block';
}