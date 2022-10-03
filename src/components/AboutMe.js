import { Image, Row, Col } from 'react-bootstrap'
import climbingPhoto from '../assets/climbing-photo.jpeg'
import './AboutMeStyles.css'

export default function AboutMe() {
    return (
        <div id="About" className="about-me__wrapper">
            <div className="about-me__container">
                <h1 className='about-me__heading'> About Me </h1>
                <div>
                    <Row>
                        <Col lg={6} sm={12} xs={12}>
                            <p>
                                Determined, fast-learning and detail-oriented UC: San Diego graduate with a degree in Cognitive Science (Design and Interaction) and a minor in Computer Science. I’m also a rock climber, a cat fanatic, and book lover. Former REI Frontend Software Developer Intern, who is now seeking full time development roles!
                            </p>
                            <p>
                                I have experience in using frontend technologies such as Javascript, React, and Vue to create dynamic and responsive web applications. I am fascinated by and invested in learning to utilize new languages and tools to become a better developer.
                            </p>
                            <p>
                                I have a background in UI/UX Design - including user research, user testing and prototyping. While I am happy to bring this skill set to the table, development is where my passion lies. However, understanding UI/UX design gives me a head start in clearly and productively communicating with designers, along with helping me to succeed in the visual aspects of frontend development.
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
