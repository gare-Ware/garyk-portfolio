
import projects from "./projects"
import { Link } from "react-router-dom";

function ProjectSummary(props) {
    const { name, summary, liveSite, url } = props.project
    
    return (
        <div className="project-summary">
            <h1 className="project-summary__name">{name}</h1>
            <p className="project-summary__description">{summary}</p>
            <a href={liveSite} className="project-summary__link">Live Site ↗</a>
            <Link to={`/project-details/${url}`} className="project-summary__link">More details</Link>
        </div>
    )
}

export default function RecentProjects() {

    const projectElements = projects.map(obj => <ProjectSummary project={obj} />)

    return (
        <div id="recent-projects" className="container recent-projects">
            <h1 className="recent-projects__header">Recent projects</h1>
            {projectElements}
        </div>
    )
}
