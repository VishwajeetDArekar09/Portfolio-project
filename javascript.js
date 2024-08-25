document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.getElementById("ResumeButton").addEventListener("click", function() {
    document.getElementById("Resume").scrollIntoView({ behavior: "smooth" });
});

document.getElementById("ViewProjectButton").addEventListener("click", function() {
    document.getElementById("ViewProject").scrollIntoView({ behavior: "smooth" });
});


