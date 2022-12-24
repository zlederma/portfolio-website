import "../styles/LandingStyles.css"
import ProjectCards from "./ProjectCards"
import Welcome from "./Welcome"
import ArtSquares from "./ArtSquares"
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
                <div className="landing__column-projects"></div>
            </div>
        </>
    )
}
