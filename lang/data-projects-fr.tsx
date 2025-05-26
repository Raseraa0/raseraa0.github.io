/**
 * Contient toutes les informations relatives aux projets.
 */

import wallpaperGeneratorImg from "../public/img/projects/WallpaperGenerator.png";
import neuralNetworkFromScratchImg from "../public/img/projects/NeuralNetwork.png";
import rayTracingImg from "../public/img/projects/RayTracing.png";

//TODO check la traduction

const projects = [
  {
    id: 1,
    title: "Générateur de fond d’écran",
    description:
      "Génère une image composée d’une mosaïque d’images données, ici des pochettes d’albums de musique. Les pochettes sont triées par couleur et arrangées dans un ordre spécifique pour produire le résultat final.",
    image_path: wallpaperGeneratorImg,
    link: "https://github.com/Raseraa0/Wallpaper",
    color: "#c2410c",
  },
  {
    id: 2,
    title: "Réseau de neurones depuis zéro",
    description:
      "Implémentation d’un réseau de neurones sans utiliser de bibliothèques d’IA existantes. Le but est de suivre les mêmes principes que Keras avec TensorFlow en Python, à l’aide de différentes couches facilement manipulables.",
    image_path: neuralNetworkFromScratchImg,
    link: "https://github.com/Raseraa0/NeuralNetworkFromScratch",
    color: "#0f766e",
  },
  {
    id: 3,
    title: "Ray tracing",
    description:
      "Développement d’un système de ray tracing. L’objectif est de simuler des objets et une caméra dans un espace 3D, puis de reconstruire de manière réaliste ce que la caméra percevrait en ajustant textures, couleurs ou motifs.",
    image_path: rayTracingImg,
    link: "https://github.com/Raseraa0/RayTracing",
    color: "#6d28d9",
  },
];

export default projects;
