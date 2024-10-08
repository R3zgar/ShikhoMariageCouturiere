import Route from "./Route.js";

//Définir ici vos routes
export const allRoutes = [
  new Route("/", "Accueil", "/pages/home.html"),
  new Route("/galerie", "La galerie", "/pages/galerie.html"),
  new Route("/aproposer", "À Proposer", "/pages/aproposer.html"),
  new Route("/contact", "Contact", "/pages/contact.html", "/js/contact.js"),
  new Route("/signin", "Connexion", "/pages/auth/signin.html"),
  new Route("/signup", "Inscription", "/pages/auth/signup.html", "/js/auth/signup.js"),
  new Route("/account", "Mon compte", "/pages/auth/account.html"),
  new Route("/editPassword", "Chengement de mot de passe", "/pages/auth/editPassword.html"),
  new Route("/allCommandes", "Vos commandes", "/pages/commandes/allCommandes.html"),
  new Route("/commander", "Commander", "/pages/commandes/commander.html"),

];

//Le titre s'affiche comme ceci : Route.titre - websitename
export const websiteName = "Shikho Mariage Couturiere";
