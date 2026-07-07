// ===============================
// Mobile Navigation Toggle
// ===============================
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

if (hamburger) {
    hamburger.addEventListener("click", () => {
        navMenu.classList.toggle("active");
        hamburger.classList.toggle("active");
    });
}

// Close mobile menu
document.querySelectorAll(".nav-menu a").forEach(link => {
    link.addEventListener("click", () => {
        if (navMenu) navMenu.classList.remove("active");
        if (hamburger) hamburger.classList.remove("active");
    });
});

// ===============================
// Contact Form (Web3Forms)
// ===============================
const contactForm = document.getElementById("contactForm");

if (contactForm) {

    const submitButton = contactForm.querySelector("button[type='submit']");
    const originalButtonText = submitButton.innerHTML;

    contactForm.addEventListener("submit", async function (e) {

        e.preventDefault();

        submitButton.disabled = true;
        submitButton.innerHTML =
            '<i class="fas fa-spinner fa-spin"></i> Sending...';

        try {

            const formData = new FormData(contactForm);

            const response = await fetch(
                "https://api.web3forms.com/submit",
                {
                    method: "POST",
                    body: formData,
                    headers: {
                        "Accept": "application/json"
                    }
                }
            );

            const data = await response.json();

            if (data.success) {

                alert("✅ Thank you! Your message has been sent successfully.");

                contactForm.reset();

            } else {

                console.error(data);

                alert("❌ " + (data.message || "Failed to send message."));

            }

        } catch (error) {

            console.error(error);

            alert("❌ Network error. Please try again.");

        } finally {

            submitButton.disabled = false;
            submitButton.innerHTML = originalButtonText;

        }

    });

}

// ===============================
// Smooth Scrolling
// ===============================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            target.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});

// ===============================
// Animate Progress Bars
// ===============================
const progressBars = document.querySelectorAll(".progress");

function animateProgress() {

    progressBars.forEach(bar => {

        const position = bar.getBoundingClientRect().top;
        const screen = window.innerHeight / 1.3;

        if (position < screen) {

            bar.style.width = bar.style.width;

        }

    });

}

window.addEventListener("scroll", animateProgress);

// ===============================
// Navbar Shadow
// ===============================
window.addEventListener("scroll", () => {

    const navbar = document.querySelector(".navbar");

    if (!navbar) return;

    if (window.scrollY > 50) {

        navbar.style.boxShadow = "0 5px 20px rgba(0,0,0,.15)";

    } else {

        navbar.style.boxShadow = "0 5px 20px rgba(0,0,0,.1)";

    }

});

// ===============================
// Fade In
// ===============================
window.addEventListener("load", () => {

    document.body.style.opacity = "0";

    setTimeout(() => {

        document.body.style.transition = "opacity .5s";
        document.body.style.opacity = "1";

    }, 100);

});