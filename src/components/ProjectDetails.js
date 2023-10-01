import './ProjectDetails.css';
import { useLoaderData } from "react-router-dom";

let PROJECTS = [
  {
    id: 1,
    content: "The task was to automate the calculation and billing process of charges to clients. I was responsible for requirements engineering, data modelling, software development, testing and deployment, as well as documentation. Project environment: Oracle, PL/SQL, SQL, JavaScript, SVN, SQL Developer",
  },
  {
    id: 2,
    content: "The project was about supporting the client’s reporting through the development of an application with PL/SQL and JavaScript. Furthermore, existing SQL scripts have been updated according to new requirements, and to fix existing errors. Furthermore, data analysis and preparation of reports in Excel and PowerPoint were also my tasks. Project environment: Oracle, SQL, PL/SQL, JavaScript, Git, Microsoft Excel, Microsoft PowerPoint",
  },
  {
    id: 3,
    content: "In the context of application portfolio management, we developed a web-based application to showcase machine learning approaches, with focus on natural language processing. The backend was developed in Python, the frontend in JavaScript. Project environment: JavaScript, Python, various ML libraries, AWS, Azure, Git, MongoDB",
  },
  {
    id: 4,
    content: "I developed and maintained two software solutions. They are both data collection programs, that unite data from various sources and display the data in Google Sheets. I was the main contact person for the client and internally lead a team of up to 5 people. We worked closely with the client to understand their requirements. The software solutions have been created within Google Workspace, with Google Sheets, Google Sites, Apps Script (Javascript), and related technologies.",
  },
  {
    id: 5,
    content: "The project started with an analysis of the client's requirements regarding the planned cloud landing zone. Concurrently we started with the development of both a high-level and a low-level design documents that describe the future cloud foundation. I also supported the actual implementation of the cloud foundation on the Google Cloud Platform. The project environment was based on Google Cloud Platform (GCP), Terraform, and Jenkins. Content-wise, the focus was on VPC design, organization design, application migration and deployments, and implementation of best practices on the Google Cloud Platform.",
  },
  {
    id: 6,
    content: "This project was about operating and evolving the existing Google Cloud environment of the client. The project required working with Google Cloud Platform (GCP) and multiple products within GCP (such as Cloud Functions, IAM, Google Workflows, Pub/Sub, Cloud Endpoints, Deployment Manager), Terraform, Linux (Bash), GitHub (including GitHub Actions), Gitlab, YAML, Python. The overall objective was to automate as much as possible and improve reliability of a so called project builder, which is used to generate new GCP projects for end users. We also received and resolved ServiceNow tickets of end users.",
  },
  {
    id: 7,
    content: "We are supporting clients by introducing new cloud-based infrastructure. We are not limited to a single provider and work with different offerings (e.g., DigitalOcean, SysEleven, Ionos, ...). The core of the infrastructure is based on Kubernetes. We are taking care of the deployments and the configuration of the Kubernetes clusters and are responsible for their availability. Furthermore, various other products are deployed to the environments, such such as logging- and monitoring solutions (e.g.,: Grafana, Prometheus, Thanos, Loki, ...). We also take care of other software configuration, for protection of the existing services (e.g.: CloudFlare). The infrastructure gets declared with Hashicorp's Terraform (Infrastructure as Code) and is versioned in GitLab, from where it is also deployed automatically. We are making use of Helm charts to install add-ons into the Clusters.",
  },
];

export default function ProjectDetails() {
    let id = parseInt(useLoaderData())
    let project = PROJECTS.find((project) => project.id === id)
    return <div class='project-details-content'>
      <h2>Project Details</h2> 
      <br></br>
      <br></br>
      <p>
      {project.content} 
      </p>
      </div>
    }
