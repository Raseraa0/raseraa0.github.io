import wallpaperGeneratorImg from "../public/projects/WallpaperGenerator.png";
import neuralNetworkFromScratchImg from "../public/projects/NeuralNetwork.png";
import rayTracingImg from "../public/projects/RayTracing.png";

const projects = [
  {
    id: 1,
    title: "Wallpaper generator",
    description:
      "Permet de générer une image constituée d'une mosaïque d'images données, ici des pochettes d'album de musique. Les pochettes sont trié par couleur et placé dans un certaine ordre afin d'obtenir le resultat final.",
    image_path: wallpaperGeneratorImg,
    link: "https://github.com/Raseraa0/Wallpaper",
    color: "#c2410c",
  },
  {
    id: 2,
    title: "Neural Network from scratch",
    description:
      "Mise en place d'un réseaux de neuronne sans s'aider des bibliotèques d'intelligence artificielle déjà existante. Le but est de s'appuyer sur le même principe que l'outils keras associé à TensorFlow sur python, avec différentes couche que l'on peut aisément manipuler",
    image_path: neuralNetworkFromScratchImg,
    link: "https://github.com/Raseraa0/NeuralNetworkFromScratch",
    color: "#0f766e",
  },
  {
    id: 3,
    title: "Ray tracing",
    description:
      "Développement d'un système de ray tracing. Le but est de simuler dans un espace en trois dimension des objects ainsi qu'une caméra, puis de reconstituer de manière réaliste ce qui serait perçu par cette caméra, en modifiant les textures, les couleurs ou les motifs.",
    image_path: rayTracingImg,
    link: "https://github.com/Raseraa0/RayTracing",
    color: "#6d28d9",
  },
];

export default projects;
