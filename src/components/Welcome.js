import ArtSquares from './ArtSquares'
import ProjectCards from './ProjectCards'
import './WelcomeStyles.css'
export default function Welcome() {
    return (
        <>
            <div className="welcome__background-container">
                <ArtSquares />
                <div className='welcome__container'>
                    <div className="welcome__intro-container">
                        <div className="welcome__heading"> Hi, It's Zoe</div>
                        <div className="welcome__tagline">
                            I'm a Frontend Developer
                            <br />fully focused on figuring out how to <br />
                            fabricate the finest experience
                        </div>
                    </div>
                </div>
            </div >
            <ProjectCards slug="master" use="home" />
        </>

    )
}
