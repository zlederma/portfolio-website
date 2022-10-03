import { Image, Row, Col } from 'react-bootstrap'
import climbingPhoto from '../assets/climbing-photo.jpeg'
import './AboutMeStyles.css'

export default function AboutMe() {
    return (
        <div className="about-me__wrapper">
            <div className="about-me__container">
                <h1 className='about-me__heading'> About Me </h1>
                <div>
                    <Row>
                        <Col lg={6} sm={12} xs={12}>
                            <p>
                                Determined, fast-learning and detail oriented UC: San Diego graduate with a degree in Cognitive Science (Design and Interaction) and a minor in Computer Science. I’m also a rock climber, a cat fanatic, and a book lover. Former REI Frontend Software Developer Intern, who is now seeking full time development roles.
                            </p>
                            <p>
                                As a developer I am experienced in using frontend technologies such as Javascript, React, Vue, and Bootstrap to create dynamic and responsive web applications. I am also interested in learning to utilize new languages and tools to become a better developer. While I am both a developer and a designer, I am more focused on the development process.
                            </p>
                            <p>
                                Human centered design is especially important in an increasingly digital world. This is one of the aspects of design I am passionate about. Taking what I have learned about how humans think; such as how we process information, cognitive biases, and heuristics, in order to create a user-friendly design. I am good at connecting ideas and looking at the whole picture in a design challenge, while still remaining detail-oriented.
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
