import Route from "./Route.js";

//Définir ici vos routes
export const allRoutes = [
  new Route("/", "Accueil", "/pages/home.html"),
  new Route("/galerie", "La galerie", "/pages/galerie.html", "/js/galerie.js"),
  new Route("/aproposer", "À Proposer", "/pages/aproposer.html"),
  new Route("/contact", "Contact", "/pages/contact.html", "/js/contact.js"),
];

//Le titre s'affiche comme ceci : Route.titre - websitename
export const websiteName = "Shikho Mariage Couturier";