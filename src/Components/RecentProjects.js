
import projects from "./projects"

function ProjectSummary(props) {
    const { name, summary, liveSite, githubRepo } = props.project
    
    return (
        <div className="project-summary">
            <h2 className="project-summary__name">{name}</h2>
            <p className="project-summary__description">{summary}</p>
            <a href={liveSite} className="project-summary__link">Live Site ↗</a>
            <a href={githubRepo} className="project-summary__link">Github repo ↗</a>
        </div>
    )
}

export default function RecentProjects() {

    const projectElements = projects.map(obj => <ProjectSummary project={obj} />)
    
    return (
        <div className="container recent-projects">
            <h1 className="recent-projects__header">Recent projects</h1>
            {projectElements}
        </div>
    )
}

// Create data file as an array of objects
    // each object is a project
        // name
        // summary
        // img
        // live site link
        // repo link
    // import array to RecentProjects
    // create functional component ProjectSummary
        // renders project summary using object from array
        // either import or create component inside RecentProjects
    // 
    