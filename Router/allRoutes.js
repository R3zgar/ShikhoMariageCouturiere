import Route from "./Route.js";

//Définir ici vos routes
export const allRoutes = [
<<<<<<< HEAD
  new Route("/", "Accueil", "/pages/home.html", []),
  new Route("/galerie", "La galerie", "/pages/galerie.html", [], "/js/galerie.js"),
  new Route("/aproposer", "À Proposer", "/pages/aproposer.html", []),
  new Route("/contact", "Contact", "/pages/contact.html", [], "/js/contact.js"),
  new Route("/signin", "Connexion", "/pages/auth/signin.html", ["disconnected"], "/js/auth/signin.js"),
  new Route("/signup", "Inscription", "/pages/auth/signup.html", ["disconnected"], "/js/auth/signup.js"),
  new Route("/account", "Mon compte", "/pages/auth/account.html", ["client", "admin"]),
  new Route("/editPassword", "Changement de mot de passe", "/pages/auth/editPassword.html", ["client", "admin"]),
  new Route("/allCommandes", "Vos commandes", "/pages/commandes/allCommandes.html", ["client"]),
  new Route("/commander", "Commander", "/pages/commandes/commander.html", ["client"]),

=======
  new Route("/", "Accueil", "/pages/home.html"),
  new Route("/galerie", "La galerie", "/pages/galerie.html", "/js/galerie.js"),
  new Route("/aproposer", "À Proposer", "/pages/aproposer.html"),
  new Route("/contact", "Contact", "/pages/contact.html", "/js/contact.js"),
>>>>>>> 4f674eb (change the files and the best performance and the best reoutuche befor uplouding the webstie in the server)
];

//Le titre s'affiche comme ceci : Route.titre - websitename
export const websiteName = "Shikho Mariage Couturier";
