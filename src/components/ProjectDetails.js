import "./ProjectDetails.css";
import { useLoaderData, Link } from "react-router-dom";

let PROJECTS = [
  {
    id: 1,
    title: "Database development",
    task: "Database development",
    industry: "Banking industry",
    content:
      "The task was to automate the calculation and billing process of charges to clients. I was responsible for requirements engineering, data modelling, software development, testing and deployment, as well as documentation. Project environment: Oracle, PL/SQL, SQL, JavaScript, SVN, SQL Developer",
  },
  {
    id: 2,
    title: "Consulting, database development",
    task: "Consulting, database development",
    industry: "Banking industry",
    content:
      "The project was about supporting the client's reporting through the development of an application with PL/SQL and JavaScript. Furthermore, existing SQL scripts have been updated according to new requirements, and to fix existing errors. Furthermore, data analysis and preparation of reports in Excel and PowerPoint were also my tasks. Project environment: Oracle, SQL, PL/SQL, JavaScript, Git, Microsoft Excel, Microsoft PowerPoint",
  },
  {
    id: 3,
    title: "AI methods evaluation and prototyping",
    task: "AI methods evaluation and prototyping",
    industry: "Logistics industry",
    content:
      "In the context of application portfolio management, we developed a web-based application to showcase machine learning approaches, with focus on natural language processing. The backend was developed in Python, the frontend in JavaScript. Project environment: JavaScript, Python, various ML libraries, AWS, Azure, Git, MongoDB",
  },
  {
    id: 4,
    title: "Solution Design & Software Development",
    task: "Solution Design & Software Development",
    industry: "Aerospace industry",
    content:
      "I developed and maintained two software solutions. They are both data collection programs, that unite data from various sources and display the data in Google Sheets. I was the main contact person for the client and internally lead a team of up to 5 people. We worked closely with the client to understand their requirements. The software solutions have been created within Google Workspace, with Google Sheets, Google Sites, Apps Script (Javascript), and related technologies.",
  },
  {
    id: 5,
    title: "Cloud Foundation Design (GCP)",
    task: "Cloud Foundation Design (GCP)",
    industry: "Energy industry",
    content:
      "The project started with an analysis of the client's requirements regarding the planned cloud landing zone. Concurrently we started with the development of both a high-level and a low-level design documents that describe the future cloud foundation. I also supported the actual implementation of the cloud foundation on the Google Cloud Platform. The project environment was based on Google Cloud Platform (GCP), Terraform, and Jenkins. Content-wise, the focus was on VPC design, organization design, application migration and deployments, and implementation of best practices on the Google Cloud Platform.",
  },
  {
    id: 6,
    title: "Systems Development and Operation",
    task: "Systems Development and Operation",
    industry: "Pharmaceutical industry",
    content:
      "This project was about operating and evolving the existing Google Cloud environment of the client. The project required working with Google Cloud Platform (GCP) and multiple products within GCP (such as Cloud Functions, IAM, Google Workflows, Pub/Sub, Cloud Endpoints, Deployment Manager), Terraform, Linux (Bash), GitHub (including GitHub Actions), Gitlab, YAML, Python. The overall objective was to automate as much as possible and improve reliability of a so called project builder, which is used to generate new GCP projects for end users. We also received and resolved ServiceNow tickets of end users.",
  },
  {
    id: 7,
    title: "Kubernetes Platform Engineering",
    task: "Kubernetes Platform Engineering",
    industry: "Software vendor",
    content:
      "We are introducing new cloud-based infrastructure, which is not not limited to a single cloud provider. Instead, we deploy to different providers (e.g., DigitalOcean, SysEleven, Ionos, ...). The core of the infrastructure is based on Kubernetes. We are taking care of the deployments and the configuration of the Kubernetes clusters and are responsible for their availability. Furthermore, various other products are deployed to the environments, such such as logging- and monitoring solutions (e.g.,: Grafana, Prometheus, Thanos, Loki, ...). We also take care of other software configuration, for protection of the existing services (e.g.: CloudFlare). The infrastructure gets declared with Hashicorp's Terraform (Infrastructure as Code) and is versioned in GitLab, from where it is also deployed automatically. We are making use of Helm charts to install add-ons into the Clusters.",
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
