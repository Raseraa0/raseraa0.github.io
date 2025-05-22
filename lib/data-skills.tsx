/**
 * Contient toutes les informations relatives au skills.
 */

import dockerImg from "../public/skills/docker.svg";
import gitImg from "../public/skills/git.svg";
import odataImg from "../public/skills/odata.svg";
import sapImg from "../public/skills/sap.svg";
import csharpImg from "../public/skills/csharp.svg";
import cppImg from "../public/skills/cpp.svg";
import javaImg from "../public/skills/java.svg";
import cImg from "../public/skills/c.svg";
import reactImg from "../public/skills/react.svg";
import nodeImg from "../public/skills/node.svg";
import typescriptImg from "../public/skills/typescript.svg";
import pytorchImg from "../public/skills/pytorch.svg";
import tensorflowImg from "../public/skills/tensorflow.svg";
import pythonImg from "../public/skills/python.svg";

const skills = [
  {
    id: 1,
    title: "Artificial Intelligence",
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
    title: "Web development",
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
    title: "Low-level development",
    subSkills: [
      {
        name: "C",
        image: cImg,
      },
    ],
  },
  {
    id: 4,
    title: "Object-Oriented",
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
    title: "SAP Development",
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
    title: "DevOps & Tools",
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
