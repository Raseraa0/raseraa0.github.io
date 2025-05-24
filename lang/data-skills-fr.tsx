/**
 * Contient toutes les informations relatives aux compétences.
 */

import dockerImg from "../public/img/skills/docker.svg";
import gitImg from "../public/img/skills/git.svg";
import odataImg from "../public/img/skills/odata.svg";
import sapImg from "../public/img/skills/sap.svg";
import csharpImg from "../public/img/skills/csharp.svg";
import cppImg from "../public/img/skills/cpp.svg";
import javaImg from "../public/img/skills/java.svg";
import cImg from "../public/img/skills/c.svg";
import reactImg from "../public/img/skills/react.svg";
import nodeImg from "../public/img/skills/node.svg";
import typescriptImg from "../public/img/skills/typescript.svg";
import pytorchImg from "../public/img/skills/pytorch.svg";
import tensorflowImg from "../public/img/skills/tensorflow.svg";
import pythonImg from "../public/img/skills/python.svg";

const skills = [
  {
    id: 1,
    title: "Intelligence Artificielle",
    subSkills: [
      {
        name: "Python",
        image: pythonImg,
      },
      {
        name: "TensorFlow",
        image: tensorflowImg,
      },
      {
        name: "PyTorch",
        image: pytorchImg,
      },
   ],
  },
  {
    id: 2,
    title: "Développement Web",
    subSkills: [
      {
        name: "TypeScript",
        image: typescriptImg,
      },
      {
        name: "Node.Js",
        image: nodeImg,
      },
      {
        name: "React",
        image: reactImg,
      },
    ],
  },
  {
    id: 5,
    title: "Développement bas niveau",
    subSkills: [
      {
        name: "C",
        image: cImg,
      },
    ],
  },
  {
    id: 4,
    title: "Programmation Orientée Objet",
    subSkills: [
      {
        name: "Java",
        image: javaImg,
      },
      {
        name: "C++",
        image: cppImg,
      },
      {
        name: "C#",
        image: csharpImg,
      },
    ],
  },
  {
    id: 3,
    title: "Développement SAP",
    subSkills: [
      {
        name: "ABAP",
        image: sapImg,
      },
      {
        name: "OData",
        image: odataImg,
      },
      {
        name: "SAP Fiori",
        image: sapImg,
      },
    ],
  },
  {
    id: 6,
    title: "DevOps & Outils",
    subSkills: [
      {
        name: "Git",
        image: gitImg,
      },
      {
        name: "Docker",
        image: dockerImg,
      },
    ],
  },
];

export default skills;
