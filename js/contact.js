
// Initialisation d'EmailJS avec votre User ID
(function () {
  emailjs.init("JCQqRbPV8QhBAFAAW"); // USER ID d'EmailJS.com
})();

// Références des champs du formulaire

const form = document.getElementById("contact-form");
const alertContainer = document.getElementById("alertContainer");

const inputNom = document.getElementById("nomInput");
const inputPreNom = document.getElementById("prenomInput");
const inputEmail = document.getElementById("emailInput");
const inputTelephone = document.getElementById("telephoneInput");
const selectBoutique = document.getElementById("boutiqueSelect");
const inputObjet = document.getElementById("objetInput");
const inputMessage = document.getElementById("messageInput");
const btnEnvoyer = document.getElementById("btn-envoyer");

// Assurez-vous que le bouton est désactivé au chargement initial
window.onload = function () {
  btnEnvoyer.disabled = true; // Désactive le bouton "Envoyer"
};

// Événements pour la validation dynamique du formulaire
inputNom.addEventListener("keyup", validateForm);
inputPreNom.addEventListener("keyup", validateForm);
inputEmail.addEventListener("keyup", validateForm);
inputTelephone.addEventListener("keyup", validateForm);
selectBoutique.addEventListener("change", validateForm);
inputObjet.addEventListener("keyup", validateForm);
inputMessage.addEventListener("keyup", validateForm);

// Function permettant de valider tout le formulair
function validateForm() {
  const nomOk = validateRequired(inputNom);
  const prenomOk = validateRequired(inputPreNom);
  const mailOk = validateMail(inputEmail);
  const selectOk = validateRequired(selectBoutique);
  const objetOk = validateRequired(inputObjet);
  const messageOk = validateRequired(inputMessage);

  // Si tous les champs sont valides, activer le bouton "Envoyer"
  if (nomOk && prenomOk && mailOk && selectOk && objetOk && messageOk) {
    btnEnvoyer.disabled = false;
  } else {
    btnEnvoyer.disabled = true;
  }
}


/**
 * Vérifie si le champ est rempli
 * @param {HTMLInputElement} input - Champ à valider
 * @returns {boolean}
 */

function validateRequired(input) {

  if (input.tagName === "SELECT" && input.value === "") {
    input.classList.remove("is-valid");
    input.classList.add("is-invalid");
    return false;
  }

  if (input.value.trim() != "") {   
    // Champ valide
    input.classList.add("is-valid");
    input.classList.remove("is-invalid");
    return true;
  } else {
    
    // Champ invalide
    input.classList.remove("is-valid");
    input.classList.add("is-invalid");
    return false;
  }
}

/**
 * Valide l'adresse email
 * @param {HTMLInputElement} input - Champ email à valider
 * @returns {boolean}
 */

function validateMail(input) {
  
  // Regex pour valider les emails
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const mailUser = input.value;
  if (mailUser.match(emailRegex)) {
    
    // Email valide
    input.classList.add("is-valid");
    input.classList.remove("is-invalid");
    return true;
  } else {
    
    // Email invalide
    input.classList.remove("is-valid");
    input.classList.add("is-invalid");
    return false;
  }
}

// Réinitialisation complète du formulaire
function reinitialiserFormulaire() {
  form.reset(); // Réinitialise les valeurs des champs
  btnEnvoyer.disabled = true; // Désactive à nouveau le bouton "Envoyer"

  // Supprime tous les styles de validation (is-valid / is-invalid)
  const inputs = form.querySelectorAll("input, textarea");
  inputs.forEach((input) => {
    input.classList.remove("is-valid", "is-invalid");
  });
}


// Validation des champs et envoi du formulaire
form.addEventListener("submit", function (event) {
  event.preventDefault(); // Empêche le rechargement de la page

  // Envoi des données à EmailJS
  emailjs
    .sendForm("service_ocyrudb", "template_dj01rjf", form)
    .then(
      function (response) {
        // Succès
        console.log("SUCCESS!", response.status, response.text);
        afficherAlerte("Votre message a été envoyé avec succès !", "success");
        reinitialiserFormulaire();// Réinitialiser le formulaire
      },
      function (error) {
        // Échec
        console.log("FAILED...", error);
        afficherAlerte(
          "Une erreur est survenue lors de l'envoi du message : " + JSON.stringify(error),
          "danger"
        );
      }
    );
});

// Fonction pour afficher une alerte Bootstrap
function afficherAlerte(message, type) {
  alertContainer.innerHTML = `
    <div class="alert alert-${type} alert-dismissible fade show" role="alert">
      ${message}
      <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
  `;

  // Supprime l'alerte après 7 secondes
  setTimeout(() => {
    const alertElement = alertContainer.querySelector(".alert");
    if (alertElement) {
      alertElement.classList.remove("show");
      alertElement.classList.add("fade");
      setTimeout(() => alertElement.remove(), 500);
    }
  }, 7000);
}


