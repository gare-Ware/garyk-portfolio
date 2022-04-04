
import projects from "./projects"
import { FaExternalLinkAlt } from 'react-icons/fa'
// import { Link } from "react-router-dom";

function ProjectSummary(props) {
    const { name, summary, liveSite, githubRepo, screens } = props.project
    
    return (
        <div className="project-summary">
            <h1 className="project-summary__name">{name}</h1>
            <img src={screens} className="project-summary__thumbnail" alt="app screenshot"/>
            <p className="project-summary__description">{summary}</p>
            <a href={liveSite} className="project-summary__link" target="_blank" rel="noreferrer">Live Site <FaExternalLinkAlt className="project-summary__link-icon" /></a>
            <a href={githubRepo} className="project-summary__link" target="_blank" rel="noreferrer">Github repo <FaExternalLinkAlt className="project-summary__link-icon" /></a>
        </div>
    )
}

export default function RecentProjects() {

    const projectElements = projects.map(obj => <ProjectSummary project={obj} />)

    return (
        <div id="recent-projects" className="container recent-projects">
            <h1 className="recent-projects__header">Recent projects</h1>
            <div className="recent-projects__container">{projectElements}</div>
        </div>
    )
}


// <p className="project-summary__description">{summary}</p>
// imgs 335x200...on iphone x viewport
// 670x400 double

// <Link to={`/project-details/${url}`} className="project-summary__link">More details</Link>