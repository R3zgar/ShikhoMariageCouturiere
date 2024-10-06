import Route from "./Route.js";

//Définir ici vos routes
export const allRoutes = [
  new Route("/", "Accueil", "/pages/home.html"),
  new Route("/galerie", "La galerie", "/pages/galerie.html"),
  new Route("/aproposer", "À Proposer", "/pages/aproposer.html"),
  new Route("/contact", "Contact", "/pages/contact.html", "/js/contact.js"),
  new Route("/signin", "Connexion", "/pages/signin.html"),
  new Route("/signup", "Inscription", "/pages/signup.html"),

];

//Le titre s'affiche comme ceci : Route.titre - websitename
export const websiteName = "Shikho Mariage Couturiere";
