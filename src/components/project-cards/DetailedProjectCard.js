// import ".../styles/DetailedProjectCardStyles.css"
import "../../styles/project-cards/DetailedProjectCardStyles.css"

export default function DetailedProjectCard({ title }) {
    return (
        <div className='detailed-project-card__container'>
            <img className="detailed-project-card__image" src="https://images.ctfassets.net/0xaemhrymik4/6m0VrCzlz5VssD0jysUoOq/f1e0f32775914136be4a47dfe27346e9/Hero.png" />
            <div className="detailed-project-card__title">
                {title}
            </div>
            <ul className="detailed-project-card__tags">
                <li> frontend</li>
            </ul>
            <ul className="detailed-project-card__technologies">
                Technologiees
                <li> Bootstrap</li>
                <li> JavaScript</li>
            </ul>
            <ul className="detailed-project-card__links">
                <li> Repo</li>
                <li> Project</li>
            </ul>
        </div>
    )
}
