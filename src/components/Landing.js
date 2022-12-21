import "./LandingStyles.css"
import ProjectCards from "./ProjectCards"
export default function () {
    return (
        <>
            <div className="landing__container">
                <div className="landing__column-art"></div>
                <div className="landing__column-welcome"></div>
                <div className="landing__column-projects"></div>
            </div>
            <ProjectCards slug="master" />
        </>
    )
}
