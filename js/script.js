// Custom JavaScript for Vendi Eats Website

document.addEventListener('DOMContentLoaded', () => {
    // This is where you would add any interactive JavaScript.
    // For now, smooth scrolling is handled by the 'scroll-smooth' class on the <html> tag (Tailwind CSS).

    // Example: A simple console log to confirm script is loading
    console.log('Vendi Eats website script loaded!');

    // Handle the contact form submission to draft an email using mailto:
    const contactForm = document.querySelector('#contact form');
    if (contactForm) {
        contactForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Prevent default form submission

            // Get values from the form fields
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value; // This will be the sender's email
            const message = document.getElementById('message').value;

            // Your Vendi Eats contact email address
            const recipientEmail = 'utkarsh.vendieats@gmail.com';

            // Subject for the email
            const subject = encodeURIComponent(`Inquiry from Vendi Eats Website - ${name}`);

            // Body of the email, including sender's name and email
            const body = encodeURIComponent(
                `Name of Sender: ${name}\n` +
                `Email for Contact: ${email}\n\n` +
                `Message from Sender: ${message}`
            );

            // Construct the mailto link
            const mailtoLink = `mailto:${recipientEmail}?subject=${subject}&body=${body}`;

            // Open the user's default email client
            window.location.href = mailtoLink;

            // Optional: Provide visual feedback to the user after opening mail client
            // Note: This feedback appears on the webpage, not in the email client.
            const submitButton = contactForm.querySelector('button[type="submit"]');
            submitButton.textContent = 'Opening Email Client...';
            submitButton.disabled = true;
            submitButton.classList.remove('bg-vendi-orange', 'hover:bg-orange-600');
            submitButton.classList.add('bg-gray-400');

            // Reset button state after a short delay (e.g., 3 seconds)
            setTimeout(() => {
                submitButton.textContent = 'Send Message';
                submitButton.disabled = false;
                submitButton.classList.remove('bg-gray-400');
                submitButton.classList.add('bg-vendi-orange', 'hover:bg-orange-600');
                // Optionally clear the form fields
                contactForm.reset();
            }, 3000);
        });
    }
});
