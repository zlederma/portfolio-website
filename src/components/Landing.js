import "../styles/LandingStyles.css"
import ProjectCards from "./ProjectCards"
import Welcome from "./Welcome"
import ArtSquares from "./ArtSquares"
import DetailedProjectCards from "./DetailedProjectCards"
import Projects from "./Projects"
export default function () {
    return (
        <>
            <div className="landing__container">
                <div className="landing__column-art">
                    <ArtSquares />
                </div>
                <div className="landing__column-welcome">
                    <Welcome />
                </div>
                <div className="landing__column-projects">
                    <Projects />
                </div>
            </div>
        </>
    )
}
