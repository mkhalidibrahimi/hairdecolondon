// Function to open the contact form and hide main content
function openContactForm() {
    document.getElementById("main-content").style.display = "none";
    document.getElementById("contact-form-section").style.display = "block";
}

// Function to close the contact form and show main content
function closeContactForm() {
    document.getElementById("main-content").style.display = "block";
    document.getElementById("contact-form-section").style.display = "none";
}
function showAlert(message) {
    alert(message);
}

// Contact form submission using Formspree with error handling
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // Collect form data
    const formData = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        message: document.getElementById("message").value
    };

    // Send form data to Formspree
    fetch("https://formspree.io/f/xkgnnbzl", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
    })
        .then(response => {
            showAlert(response.ok ? "Message sent successfully!" : "Failed to send message. Please check your information and try again.");
            if (response.ok) {
                document.getElementById("contactForm").reset(); // Clear form after successful submission
            }
        })
        .catch(error => {
            console.error("Submission error:", error);
            showAlert("An error occurred. Please try again later.");
        });
});
