// Implementer le JS de ma page

const inputNom = document.getElementById("nomInput");
const inputPreNom = document.getElementById("prenomInput");
const inputEmail = document.getElementById("emailInput");
const inputTelephone = document.getElementById("telephoneInput");
const inputObjet = document.getElementById("objetInput");
const inputMessage = document.getElementById("messageInput");
const btnEnvoyer = document.getElementById("btn-envoyer");

inputNom.addEventListener("keyup", validateForm);
inputPreNom.addEventListener("keyup", validateForm);
inputEmail.addEventListener("keyup", validateForm);
inputTelephone.addEventListener("keyup", validateForm);
inputObjet.addEventListener("keyup", validateForm);
inputMessage.addEventListener("keyup", validateForm);

// Function permettant de valider tout le formulair
function validateForm() {
  const nomOk = validateRequired(inputNom);
  const prenomOk = validateRequired(inputPreNom);
  const mailOk = validateMail(inputEmail);
  const objetOk = validateRequired(inputObjet);
  const messageOk = validateRequired(inputMessage);

  if (nomOk && prenomOk && mailOk && objetOk && messageOk) {
    btnEnvoyer.disabled = false;
  } else {
    btnEnvoyer.disabled = true;
  }
}

function validateMail(input) {
  // Definir mon Regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const mailUser = input.value;
  if (mailUser.match(emailRegex)) {
    // C'est D'accord
    input.classList.add("is-valid");
    input.classList.remove("is-invalid");
    return true;
  } else {
    // C'est PAS D'accord
    input.classList.remove("is-valid");
    input.classList.add("is-invalid");
    return false;
  }
}

function validateRequired(input) {
  if (input.value != "") {
    // C'est D'accord
    input.classList.add("is-valid");
    input.classList.remove("is-invalid");
    return true;
  } else {
    // C'est PAS D'accord
    input.classList.remove("is-valid");
    input.classList.add("is-invalid");
    return false;
  }
}