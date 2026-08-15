const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector(".nav");

/* ================= MENU MOBILE ================= */

if (menuBtn && nav) {
  menuBtn.addEventListener("click", () => {
    nav.classList.toggle("open");

    const isOpen = nav.classList.contains("open");

    menuBtn.setAttribute(
      "aria-label",
      isOpen ? "Fermer le menu" : "Ouvrir le menu"
    );
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
      menuBtn.setAttribute("aria-label", "Ouvrir le menu");
    }

  });

});


/* ================= FORMULAIRE ================= */

const contactForm = document.querySelector("#contactForm");
const formStatus = document.querySelector("#formStatus");


if (contactForm) {

  contactForm.addEventListener("submit", async (event) => {

    event.preventDefault();

    const submitButton = contactForm.querySelector(
      'button[type="submit"]'
    );

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
            "✓ Votre message a bien été envoyé. Merci de contacter GK Design !";
        }

      } else {

        if (formStatus) {
          formStatus.textContent =
            "Une erreur est survenue. Veuillez réessayer.";
        }

      }

    } catch (error) {

      if (formStatus) {
        formStatus.textContent =
          "Impossible d'envoyer le message pour le moment. Vérifiez votre connexion.";
      }

    }


    submitButton.disabled = false;
    submitButton.textContent = originalText;

  });

}
