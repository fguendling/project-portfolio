import './ProjectDetails.css';
import { useLoaderData } from "react-router-dom";

let PROJECTS = [
  {
    id: 1,
    content: "Enjoying a cup of coffee",
  },
  {
    id: 2,
    content: "Magical winter sunrise",
  },
  {
    id: 3,
    content: "Dalmatian and pumpkins",
  },
  {
    id: 4,
    content: "Fall into Autumn 🍂🐶",
  },
  {
    id: 5,
    content: "Bla",
  },
  {
    id: 6,
    content: "Bli",
  },
  {
    id: 7,
    content: "'Blub'",
  },
];

export default function ProjectDetails() {
    let id = useLoaderData()
    let project = PROJECTS.find((project) => project.id === id)
    return <div>Content is coming soon, these are just some placeholders: {project.content} </div>
    }
