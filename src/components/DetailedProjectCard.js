import "../styles/DetailedProjectCardStyles.css"

export default function DetailedProjectCard({ title }) {
    return (
        <div className='detailed-project-card__container'>
            <div className="detailed-project-card__title">
                {title}
            </div>
            <ul className="detailed-project-card__tags">
                <li> frontend</li>
            </ul>
            <img className="detailed-project-card__image" src="" />
            {/* <ul className="detailed-project-card__technologies">
                Technologiees
                <li> Bootstrap</li>
                <li> JavaScript</li>
            </ul> */}
            <ul className="detailed-project-card__links">
                <li> Repo</li>
                <li> Project</li>
            </ul>
        </div>
    )
}
