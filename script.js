// Dark Mode Toggle
const darkModeToggle = document.getElementById('dark-mode-toggle');
const body = document.body;

darkModeToggle.addEventListener('click', () => {
    const isDark = body.classList.toggle('dark-mode');
    darkModeToggle.textContent = isDark ? 'Light Mode ☀️' : 'Dark Mode 🌙';
});

// Contact Form - AJAX submission and inline thank you
const contactForm = document.getElementById('contact-form');
const contactContent = document.getElementById('contact-content');
const emailInput = document.querySelector('input[name="email"]');
const replyToInput = document.querySelector('input[name="_replyto"]');

contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    // Set reply-to email
    replyToInput.value = emailInput.value;

    // Show loading state
    const submitBtn = contactForm.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Sending...';
    submitBtn.disabled = true;

    try {
        // Create FormData from the form
        const formData = new FormData(contactForm);

        // Submit to FormSubmit
        const response = await fetch('https://formsubmit.co/sajiyanazir28@gmail.com', {
            method: 'POST',
            body: formData
        });

        if (response.ok) {
            // Show thank you message inline - exact same as thankyou.html
            contactContent.innerHTML = `
                <div class="thank-you-container">
                    <h1>Thank You!</h1>
                    <p>Your message has been sent successfully. I'll get back to you as soon as possible.</p>
                    <a href="index.html" class="btn-primary">Back to Portfolio</a>
                    <div class="social-links">
                        <a href="https://www.linkedin.com/in/sajiya-nazir-9a956435a/" target="_blank" rel="noreferrer">LinkedIn</a>
                        <a href="https://github.com/sajiya1528" target="_blank" rel="noreferrer">GitHub</a>
                    </div>
                </div>
            `;
        } else {
            throw new Error('Failed to send message');
        }
    } catch (error) {
        console.error('Error sending message:', error);
        alert('Sorry, there was an error sending your message. Please try again.');
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
    }
});

// Animation on Scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animationDelay = '0s';
            entry.target.style.animationPlayState = 'running';
        }
    });
}, observerOptions);

// Observe project cards
document.querySelectorAll('.project-card').forEach(card => {
    observer.observe(card);
});