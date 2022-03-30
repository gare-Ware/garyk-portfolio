

export default function ProjectDetails(props) {
    
    const { name, summary, liveSite, githubRepo } = props.project
    
    return (
        <div className="container project-details">
            <h1 className="project-details__header">{name}</h1>
            <p className="project-details__description">{summary}</p>
            <a href={liveSite} className="project-details__link"  target="_blank" rel="noreferrer">Live Site ↗</a>
            <a href={githubRepo} className="project-details__link"  target="_blank" rel="noreferrer">Github repo ↗</a>
        </div>
    )
}