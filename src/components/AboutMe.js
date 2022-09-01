import React from 'react'
import { Image, Row, Col } from 'react-bootstrap'
import climbingPhoto from '../assets/climbing-photo.jpeg'


const h1Style = {
    color: "#c5462c",
    fontWeight: "700",
    fontFamily: "Roboto",

}
const h2Style = {
    color: "rgb(30,30,30)",
    fontWeight: "600",
    fontFamily: "Roboto",
    fontSize: "30px"
}
const pStyle = {
    fontSize: "20px",

}
//className for paragraph elements
const h1Class = "mb-2"
const h2Class = "mb-2 mt-5"
const pClass = "mb-4"
const imgClass = "mb-2"
export default function AboutMe() {
    return (
        <div style={{ minWidth: "100vw", backgroundColor: "#f5eae9", display: "flex", justifyContent: "center" }}>
            <div className="mx-4" style={{ maxWidth: "1100px" }}>
                <div id="About" style={{ minHeight: "30px" }}></div>
                <div className="pt-5" style={{ minHeight: "100vh" }}>
                    <h1 className={`${h1Class} display-4 `} style={h1Style}> About Me </h1>
                    <div>
                        <Row>
                            <Col lg={6} sm={12} xs={12}>
                                <p className={pClass} style={pStyle}>
                                    Determined, fast-learning and detail oriented UC: San Diego graduate with a degree in Cognitive Science (Design and Interaction) and a minor in Computer Science. I’m also a rock climber, a cat fanatic, and a book lover. Former REI Frontend Software Developer Intern, who is now seeking full time development roles.  </p>

                                <p className={pClass} style={pStyle}>
                                    As a developer I am experienced in using frontend technologies such as Javascript, React, Vue, and Bootstrap to create dynamic and responsive web applications. I am also interested in learning to utilize new languages and tools to become a better developer. While I am both a developer and a designer, I am more focused on the development process.  </p>

                                <p className={pClass} style={pStyle}>
                                    Human centered design is especially important in an increasingly digital world. This is one of the aspects of design I am passionate about. Taking what I have learned about how humans think; such as how we process information, cognitive biases, and heuristics, in order to create a user-friendly design. I am good at connecting ideas and looking at the whole picture in a design challenge, while still remaining detail-oriented.</p>
                            </Col>
                            <Col lg={6} sm={6} xs={6}>
                                <Image className={imgClass} src={climbingPhoto} style={{ width: "100%" }} />
                            </Col>
                        </Row>
                    </div>
                    <div style={{ minHeight: "80px" }}></div>
                </div>
            </div>
        </div>
    )
}
