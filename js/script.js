// Smooth scrolling for internal links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth",
        });
    });
});

// Form validation
document.querySelector("form").addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const interested = document.getElementById("interested").value;

    if (name === "" || email === "" || interested === "") {
        alert("Please fill out all fields.");
    } else {
        alert(`Thank you, ${name}! We will contact you soon.`);
    }
});

// Handle "Call to Action" button click
document
    .querySelector(".headline button")
    .addEventListener("click", function () {
        alert("Thank you for your interest! We will get back to you soon.");
    });
