// Smooth Welcome Message
window.addEventListener("load", () => {
    console.log("Welcome to Roman Bala Portfolio");
});

// Navbar Shadow on Scroll
window.addEventListener("scroll", () => {
    const navbar = document.querySelector(".navbar");

    if (window.scrollY > 50) {
        navbar.style.boxShadow = "0 5px 20px rgba(255,0,0,0.4)";
    } else {
        navbar.style.boxShadow = "none";
    }
});

// Smooth Scroll for Navigation
document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", function(e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        target.scrollIntoView({
            behavior: "smooth"
        });
    });
});

// Button Animation
const buttons = document.querySelectorAll(".btn");

buttons.forEach(btn => {
    btn.addEventListener("mouseenter", () => {
        btn.style.transform = "scale(1.05)";
    });

    btn.addEventListener("mouseleave", () => {
        btn.style.transform = "scale(1)";
    });
});