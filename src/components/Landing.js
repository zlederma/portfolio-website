import "../styles/LandingStyles.css"
import ProjectCards from "./ProjectCards"
import Welcome from "./Welcome"
import ArtSquares from "./ArtSquares"
import DetailedProjectCards from "./DetailedProjectCards"
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
                    {/* //Titles, tags, technologies, project, repository, study */}
                    <DetailedProjectCards titles={["hi", "2", "3"]} />
                </div>
            </div>
        </>
    )
}
