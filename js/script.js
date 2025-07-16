// Custom JavaScript for Vendi Eats Website

document.addEventListener('DOMContentLoaded', () => {
    // This is where you would add any interactive JavaScript.
    // For now, smooth scrolling is handled by the 'scroll-smooth' class on the <html> tag (Tailwind CSS).
    // If you were to add more complex animations or form submissions, they would go here.

    // Example: A simple console log to confirm script is loading
    console.log('Vendi Eats website script loaded!');

    // Example of how you might handle a form submission (client-side only, for demonstration)
    const contactForm = document.querySelector('#contact form');
    if (contactForm) {
        contactForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Prevent default form submission

            // In a real scenario, you'd send this data to a backend service.
            // For now, we'll just log it and show a message.
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            console.log('Form Submitted:', { name, email, message });

            // Display a simple confirmation message (replace with a proper modal/message box in a real app)
            const submitButton = contactForm.querySelector('button[type="submit"]');
            submitButton.textContent = 'Message Sent!';
            submitButton.disabled = true;
            submitButton.classList.remove('bg-vendi-orange', 'hover:bg-orange-600');
            submitButton.classList.add('bg-gray-400');

            // You could also clear the form fields here
            // contactForm.reset();
        });
    }
});
