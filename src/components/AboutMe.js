import { Image, Row, Col } from 'react-bootstrap'
import climbingPhoto from '../assets/climbing-photo.jpeg'
import '../styles/AboutMeStyles.css'

export default function AboutMe() {
    return (
        <div id="About" className="about-me__wrapper">
            <div className="about-me__container">
                <h1 className='about-me__heading'> About Me </h1>
                <div>
                    <Row>
                        <Col lg={6} sm={12} xs={12}>
                            <p>
                                Hello! I'm a recent graduate of the University of California, San Diego, where I earned a degree in Cognitive Science (Human-Computer Interaction) and a minor in Computer Science. I have also gained valuable experience as a REI Frontend Software Developer Intern, where I developed the <a href="https://www.rei.com/action/network/campaigns">All Campaigns Page</a> and contributed to a variety of other projects.
                            </p>
                            <p>
                                I'm an analytical, independent, and creative frontend developer with a passion for building dynamic and responsive web applications using technologies such as Javascript, React, and Vue. I am always eager to learn and expand my knowledge and skills, and I am excited to bring my enthusiasm for learning and growth to a new team.
                            </p>
                            <p>
                                I have a strong background in UI/UX design, including user research, user testing, and prototyping. My understanding of design principles allows me to effectively communicate with designers and excel in the visual aspects of frontend development.
                            </p>
                            <p>
                                When I'm not working, I can often be found rock climbing, hanging out with cats, or curled up with a good book.
                            </p>
                        </Col>
                        <Col lg={6} sm={8} xs={12}>
                            <Image className="about-me__image" src={climbingPhoto} />
                        </Col>
                    </Row>
                </div>
            </div>
        </div>
    )
}
