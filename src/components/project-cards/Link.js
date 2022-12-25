import "../../styles/project-cards/LinkStyles.css"
export default function Link() {
    return (
        <a href="" target="blank" className="detailed-project-card__link-container">
            <img className='detailed-project-card__link-image' src="https://images.ctfassets.net/0xaemhrymik4/T0ba3180EptqfFYNmkxpk/31338245cb77bd3cd1fcfe264b5e30a0/github-logo.png" />
            <div className='detailed-project-card__link-title'> Repo </div>
        </a>
    )
}
