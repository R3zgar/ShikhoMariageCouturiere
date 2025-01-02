// Liste des images de la galerie
const galleryImages = document.querySelectorAll('.image-card img');
const modalImage = document.getElementById('modalImage');
const imageModal = new bootstrap.Modal(document.getElementById('imageModal'));
let currentIndex = 0; // Index de l'image actuelle

// Ouvrir le modal lorsqu'on clique sur une image
galleryImages.forEach((img, index) => {
  img.addEventListener('click', () => {
    currentIndex = index; // Stocke l'index de l'image cliquée
    modalImage.src = img.src; // Affiche l'image dans le modal
    imageModal.show(); // Affiche le modal
  });
});

// Naviguer vers l'image précédente
document.getElementById('prevImage').addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
  modalImage.src = galleryImages[currentIndex].src;
});

// Naviguer vers l'image suivante
document.getElementById('nextImage').addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % galleryImages.length;
  modalImage.src = galleryImages[currentIndex].src;
});

// Fermer le modal en cliquant à l'extérieur
document.getElementById('imageModal').addEventListener('click', (event) => {
  if (event.target === event.currentTarget) {
    imageModal.hide();
  }
});