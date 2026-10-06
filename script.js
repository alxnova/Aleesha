const cursor = document.querySelector(".custom-cursor");

document.addEventListener("mousemove", function (event) {
    if (!cursor) return;

    cursor.style.left = event.clientX + "px";
    cursor.style.top = event.clientY + "px";
});


/* =========================
   CURSOR HOVER EFFECT
========================= */

const clickableElements = document.querySelectorAll(
    "a, summary, .certificate-card, .conference-card"
);

clickableElements.forEach(function (element) {

    element.addEventListener("mouseenter", function () {

        if (cursor) {
            cursor.classList.add("hover");
        }

    });


    element.addEventListener("mouseleave", function () {

        if (cursor) {
            cursor.classList.remove("hover");
        }

    });

});


/* =========================
   PAGE TRANSITION
========================= */

const transition = document.querySelector(".page-transition");

const navigationLinks = document.querySelectorAll(
    'a[href^="#"]'
);

navigationLinks.forEach(function (link) {

    link.addEventListener("click", function (event) {

        const targetID = link.getAttribute("href");

        if (!targetID || targetID === "#") {
            return;
        }

        const target = document.querySelector(targetID);

        if (!target) {
            return;
        }

        event.preventDefault();

        if (transition) {
            transition.classList.add("active");
        }

        setTimeout(function () {

            target.scrollIntoView({
                behavior: "auto",
                block: "start"
            });

            setTimeout(function () {

                if (transition) {
                    transition.classList.remove("active");
                }

            }, 120);

        }, 500);

    });

});


/* =========================
   PROJECT ACCORDION
========================= */

const projectCards = document.querySelectorAll(
    ".project-card"
);

projectCards.forEach(function (card) {

    card.addEventListener("toggle", function () {

        if (card.open) {

            card.style.borderColor =
                "rgba(155,92,255,0.45)";

            projectCards.forEach(function (otherCard) {

                if (otherCard !== card) {
                    otherCard.removeAttribute("open");
                }

            });

        } else {

            card.style.borderColor =
                "rgba(255,255,255,0.14)";

        }

    });

});

/* =========================
   SCROLL PROGRESS
========================= */

const progressBar = document.querySelector(".scroll-progress-bar");

window.addEventListener("scroll", function () {

    if (!progressBar) return;

    const scrollTop = window.scrollY;

    const documentHeight =
        document.documentElement.scrollHeight - window.innerHeight;

    const scrollPercentage =
        (scrollTop / documentHeight) * 100;

    progressBar.style.width = scrollPercentage + "%";

});