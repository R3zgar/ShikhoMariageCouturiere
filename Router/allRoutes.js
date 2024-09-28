import Route from "./Route.js";

//Définir ici vos routes
export const allRoutes = [
  new Route("/", "Accueil", "/pages/home.html"),
  new Route("/galerie", "La galerie", "/pages/galerie.html"),
  new Route("/aproposer", "À Proposer", "/pages/aproposer.html"),
  new Route("/contact", "Contact", "/pages/contact.html"),

  /** 
  new Route("/", "Propose", "/pages/propose.html"),
  new Route("/", "Services", "/pages/services.html"),
  new Route("/galerie", "La galerie", "/pages/galerie.html", "/js/galerie.js"),
  new Route("/", "Contact", "/pages/contact.html"),
  **/
];

//Le titre s'affiche comme ceci : Route.titre - websitename
export const websiteName = "Shikho Mariage Couturiere";
