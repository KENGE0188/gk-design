// ================= MENU MOBILE =================

const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

menuBtn.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});


// Fermer le menu après avoir cliqué sur un lien

document.querySelectorAll("#navMenu a").forEach(link => {

    link.addEventListener("click", () => {
        navMenu.classList.remove("active");
    });

});


// ================= ANIMATION AU SCROLL =================

const elements = document.querySelectorAll(
    ".skill-card, .project-card, .formation-card, .product-card, .contact-item"
);

const observer = new IntersectionObserver(
    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";

            }

        });

    },
    {
        threshold: 0.1
    }
);


elements.forEach(element => {

    element.style.opacity = "0";
    element.style.transform = "translateY(25px)";
    element.style.transition = "opacity .6s ease, transform .6s ease";

    observer.observe(element);

});


// ================= ANNEE AUTOMATIQUE =================

const copyright = document.querySelector(".copyright");

if (copyright) {

    const year = new Date().getFullYear();

    copyright.innerHTML =
        `© ${year} GK Design — Gédéon KENGE EKOSONDE. Tous droits réservés.`;

}
