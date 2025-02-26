/*===== MENU SHOW =====*/
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId);

    if (toggle && nav) {
        toggle.addEventListener("click", () => {
            nav.classList.toggle("show");
        });
    }
};
showMenu("nav-toggle", "nav-menu");

/*===== REMOVE MENU MOBILE =====*/
const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
    document.getElementById("nav-menu").classList.remove("show");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));

/*===== SCROLL SECTIONS ACTIVE LINK =====*/
const sections = document.querySelectorAll("section[id]");

function scrollActive() {
    const scrollDown = window.scrollY;

    sections.forEach((current) => {
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 58,
            sectionId = current.getAttribute("id"),
            sectionsClass = document.querySelector(".nav__menu a[href*=" + sectionId + "]");

        if (sectionsClass) {
            if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
                sectionsClass.classList.add("active-link");
            } else {
                sectionsClass.classList.remove("active-link");
            }
        }
    });
}
window.addEventListener("scroll", scrollActive);

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: "top",
    distance: "60px",
    duration: 2000,
    delay: 200,
});

sr.reveal(".home__data, .about__img, .skills__subtitle, .skills__text");
sr.reveal(".home__img, .about__subtitle, .about__text, .skills__img", { delay: 400 });
sr.reveal(".home__social-icon", { interval: 200 });
sr.reveal(".skills__data, .work__img, .contact__input", { interval: 200 });

/*===== SKILLS PROGRESS BAR ANIMATION =====*/
document.addEventListener("DOMContentLoaded", function () {
    function animateSkills() {
        document.querySelectorAll(".skill__progress").forEach((bar) => {
            let percent = bar.getAttribute("data-percent");
            let percentageText = bar.parentElement.querySelector(".skill__percentage");

            bar.style.width = "0%";
            percentageText.textContent = "0%";

            let currentWidth = 0;
            let animation = setInterval(() => {
                if (currentWidth >= percent) {
                    clearInterval(animation);
                } else {
                    currentWidth++;
                    bar.style.width = currentWidth + "%";
                    percentageText.textContent = currentWidth + "%";
                }
            }, 20);
        });
    }
    animateSkills();
});

/*===== SCROLL ANIMATION FOR EDUCATION SECTION =====*/
document.addEventListener("DOMContentLoaded", function () {
    const items = document.querySelectorAll(".timeline-item");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("show");
                }
            });
        },
        { threshold: 0.5 }
    );

    items.forEach((item) => observer.observe(item));
});

/*===== SCROLL ANIMATION FOR SKILLS SECTION =====*/
document.addEventListener("DOMContentLoaded", function () {
    const skillItems = document.querySelectorAll(".skill-item");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("show");
                }
            });
        },
        { threshold: 0.5 }
    );

    skillItems.forEach((item) => observer.observe(item));
});
