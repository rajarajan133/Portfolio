// Handle form submission
document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault();

    // Get form field values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Basic validation
    if (!name || !email || !message) {
        alert('Please fill in all fields.');
        return;
    }

    // Simulate form submission (e.g., send data to a server or API)
    setTimeout(() => {
        // Show success message
        document.getElementById('response').classList.remove('hidden');
        
        // Optionally, reset the form after submission
        document.getElementById('contact-form').reset();
    }, 1000); // Simulate network delay
});

