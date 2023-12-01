const textarea = document.getElementById('userInput');

textarea.addEventListener('input', (event) => {
    const enteredText = event.target.value;
    // Add your logic to handle the entered text
    console.log('Entered Text:', enteredText);
});