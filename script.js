// =========================
// SCROLL ANIMATION
// =========================

const sections = document.querySelectorAll(".hero, .section");

const scrollObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {

            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }

        });
    },
    {
        threshold: 0.15
    }
);

sections.forEach((section) => {
    scrollObserver.observe(section);
});


// =========================
// ACTIVE NAVIGATION
// =========================

const navLinks = document.querySelectorAll(".nav a");
const navSections = document.querySelectorAll(
    ".hero, .profile, .service, .works, .video, .contact"
);

const navObserver = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                const currentId = entry.target.id;

                navLinks.forEach((link) => {
                    link.classList.remove("active");
                });

                const currentLink = document.querySelector(
                    `.nav a[href="#${currentId}"]`
                );

                if (currentLink) {
                    currentLink.classList.add("active");
                }
            }

        });

    },
    {
        threshold: 0.4
    }
);

navSections.forEach((section) => {
    navObserver.observe(section);
});


// =========================
// BACK TO TOP
// =========================

const backToTop = document.querySelector("#backToTop");

backToTop.onclick = function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
};