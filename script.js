document.addEventListener("DOMContentLoaded", function() {
    console.log("JavaScript Loaded Successfully");

    // Smooth scrolling for navigation links
    document.querySelectorAll("nav ul li a").forEach(anchor => {
        anchor.addEventListener("click", function(event) {
            if (this.getAttribute("href").startsWith("#")) {
                event.preventDefault();
                const targetId = this.getAttribute("href").substring(1);
                document.getElementById(targetId).scrollIntoView({
                    behavior: "smooth"
                });
            }
        });
    });

    // Booking button navigation
    document.querySelectorAll(".book-now").forEach(button => {
        button.addEventListener("click", function() {
            window.location.href = "booking.html";
        });
    });

    // Form validation for contact page
    const contactForm = document.querySelector("#contact form");
    if (contactForm) {
        contactForm.addEventListener("submit", function(event) {
            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const message = document.getElementById("message").value.trim();
            
            if (name === "" || email === "" || message === "") {
                alert("Please fill out all fields before submitting.");
                event.preventDefault();
            }
        });
    }
});
