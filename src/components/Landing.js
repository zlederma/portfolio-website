import "../styles/LandingStyles.css"
import Welcome from "./Welcome"
import ArtSquares from "./ArtSquares"
import Projects from "./Projects"
import Links from "./Links"
export default function Landing() {
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
                <Links />
            </div>
        </>
    )
}
