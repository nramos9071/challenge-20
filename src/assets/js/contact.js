const submitButton = document.querySelector('.submit-button');

if (submitButton) {
    submitButton.addEventListener('click', (event) => {
        event.preventDefault();
        console.log('Submit button clicked.');
        const name = document.querySelector('#name').value.trim();
        const email = document.querySelector('#email').value.trim();
        const message = document.querySelector('#message').value.trim();

        if (!name || !email || !message) {
            alert('Please fill in all fields.');
            return;
        }

        console.log('Name:', name);
        console.log('Email:', email);
        console.log('Message:', message);
    });
}