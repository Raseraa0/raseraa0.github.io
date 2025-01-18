import { useEffect } from 'react';

function PreloadImages() {
  useEffect(() => {
    // Liste de tous les chemins de vos images dans l'ordre
    const images = [
      '/Minimaliste/Modified_Layer/0_Sky.png',
      '/Minimaliste/Modified_Layer/1_Clouds.png',
      '/Minimaliste/Modified_Layer/2_Mountains.png',
      // ... ajoutez toutes vos images
    ];

    // Pour chaque chemin d'image, on crée un nouvel objet Image
    // et on définit sa source, ce qui déclenche le chargement
    images.forEach(src => {
      const img = new Image();
      img.src = src;
    });
  }, []); // Le tableau vide signifie que cela ne s'exécute qu'une fois au montage du composant

  return null; // Le composant ne rend rien visuellement
}

export default PreloadImages;