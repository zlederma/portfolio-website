import "../styles/DetailedProjectCardStyles.css"

export default function DetailedProjectCard({ title }) {
    return (
        <div className='detailed-project-card__container'>
            <div className="detailed-project-card__title">
                {title}
            </div>
        </div>
    )
}
