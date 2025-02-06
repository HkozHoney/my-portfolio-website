// Back to Top Button
const backToTopButton = document.getElementById("backToTop");

// Show button when user scrolls down
window.onscroll = function() {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
    }
};

// Scroll to top smoothly when button is clicked
backToTopButton.onclick = function() {
    window.scrollTo({ top: 0, behavior: "smooth" });
};
