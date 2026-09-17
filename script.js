const sections = document.querySelectorAll(
    ".content, .letter-box"
);

const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";

            }

        });

    },
    {
        threshold: 0.15
    }
);


sections.forEach((section) => {

    section.style.opacity = "0";

    section.style.transform = "translateY(40px)";

    section.style.transition =
        "opacity 1.2s ease, transform 1.2s ease";

    observer.observe(section);

});