import "./ProjectDetails.css";
import { useLoaderData, Link } from "react-router-dom";

let PROJECTS = [
  {
    id: 1,
    title: "Database development",
    industry: "Banking industry",
    content:
      "The task was to automate the calculation and billing process of charges to clients. I was responsible for requirements engineering, data modelling, software development, testing and deploym[...]
  },
  {
    id: 2,
    title: "Consulting, database development",
    industry: "Banking industry",
    content:
      "The project was about supporting the client's reporting through the development of an application with PL/SQL and JavaScript. Furthermore, existing SQL scripts have been updated according t[...]
  },
  {
    id: 3,
    title: "AI methods evaluation and prototyping",
    industry: "Logistics industry",
    content:
      "In the context of application portfolio management, we developed a web-based application to showcase machine learning approaches, with focus on natural language processing. The backend was [...]
  },
  {
    id: 4,
    title: "Solution Design & Software Development",
    industry: "Aerospace industry",
    content:
      "I developed and maintained two software solutions. They are both data collection programs, that unite data from various sources and display the data in Google Sheets. I was the main contact[...]
  },
  {
    id: 5,
    title: "Cloud Foundation Design (GCP)",
    industry: "Energy industry",
    content:
      "The project started with an analysis of the client's requirements regarding the planned cloud landing zone. Concurrently we started with the development of both a high-level and a low-level[...]
  },
  {
    id: 6,
    title: "Systems Development and Operation",
    industry: "Pharmaceutical industry",
    content:
      "This project was about operating and evolving the existing Google Cloud environment of the client. The project required working with Google Cloud Platform (GCP) and multiple products within[...]
  },
  {
    id: 7,
    title: "Kubernetes Platform Engineering",
    industry: "Software vendor",
    content:
      "We are introducing new cloud-based infrastructure, which is not limited to a single cloud provider. Instead, we deploy to different providers (e.g., DigitalOcean, SysEleven, Ionos, ...). Th[...]
  },
  {
    id: 8,
    title: "Automation with Ansible via self-hosted Docker Swarm Cluster",
    industry: "Telecommunications industry",
    content:
      "This project focused on automating infrastructure and application deployments using Ansible in a telecommunications environment. The automation was orchestrated through a self-hosted Docker[...]
  },
  {
    id: 9,
    title: "Kubernetes Platform Engineering",
    industry: "Defense industry",
    content:
      "Placeholder description for Kubernetes Platform Engineering project in the defense industry. More details to be added."
  },
];

export default function ProjectDetails() {
  let id = parseInt(useLoaderData());
  let project = PROJECTS.find((project) => project.id === id);
  
  if (!project) {
    return (
      <div className="project-details-content">
        <h2>Project Not Found</h2>
        <Link to="/" className="back-button">← Back to Home</Link>
      </div>
    );
  }

  return (
    <div className="project-details-content">
      <Link to="/" className="back-button">← Back to Home</Link>
      
      <div className="project-header">
        <h1>{project.title}</h1>
        <div className="project-meta">
          <span className="meta-item">
            <strong>Industry:</strong> {project.industry}
          </span>
        </div>
      </div>

      <div className="project-description">
        <h2>Project Description</h2>
        <p>{project.content}</p>
      </div>
    </div>
  );
}
