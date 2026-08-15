/* ================= MENU MOBILE ================= */

const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector(".nav");

if (menuBtn && nav) {
  menuBtn.addEventListener("click", () => {

    nav.classList.toggle("open");

    const menuIsOpen = nav.classList.contains("open");

    menuBtn.setAttribute(
      "aria-label",
      menuIsOpen ? "Fermer le menu" : "Ouvrir le menu"
    );

    menuBtn.textContent = menuIsOpen ? "✕" : "☰";
  });
}


/* Fermer le menu après avoir cliqué sur un lien */

const navLinks = document.querySelectorAll(".nav a");

navLinks.forEach((link) => {

  link.addEventListener("click", () => {

    if (nav) {
      nav.classList.remove("open");
    }

    if (menuBtn) {
      menuBtn.textContent = "☰";

      menuBtn.setAttribute(
        "aria-label",
        "Ouvrir le menu"
      );
    }

  });

});


/* ================= FORMULAIRE ================= */

const contactForm = document.querySelector("#contactForm");
const formStatus = document.querySelector("#formStatus");


if (contactForm) {

  contactForm.addEventListener("submit", async (event) => {

    event.preventDefault();

    const submitButton =
      contactForm.querySelector('button[type="submit"]');

    if (!submitButton) {
      return;
    }

    const originalText = submitButton.textContent;

    submitButton.disabled = true;
    submitButton.textContent = "Envoi en cours...";


    if (formStatus) {
      formStatus.textContent = "";
    }


    try {

      const response = await fetch(
        contactForm.action,
        {
          method: "POST",
          body: new FormData(contactForm),
          headers: {
            Accept: "application/json"
          }
        }
      );


      if (response.ok) {

        contactForm.reset();

        if (formStatus) {

          formStatus.textContent =
            "✓ Votre message a bien été envoyé à GK Design.";

        }

      } else {

        if (formStatus) {

          formStatus.textContent =
            "❌ Une erreur est survenue. Veuillez réessayer.";

        }

      }

    } catch (error) {

      if (formStatus) {

        formStatus.textContent =
          "❌ Impossible d'envoyer le message. Vérifiez votre connexion.";

      }

    }


    submitButton.disabled = false;
    submitButton.textContent = originalText;

  });

}


/* ================= ANNÉE AUTOMATIQUE ================= */

const currentYear = new Date().getFullYear();

const footerText = document.querySelector("footer p");

if (footerText) {

  footerText.textContent =
    `© ${currentYear} GK Design — Tous droits réservés.`;

}
