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
                                    I’m a Junior at UC: San Diego, a New Mexican, a rock climber, a cat fanatic, a book lover. I’m also a Front-End Developer and User Interface Designer. </p>

                                <p className={pClass} style={pStyle}>
                                    As a developer I am experienced in using Javascript, React, and Bootstrap to create dynamic and responsive web applications. I am also interested in learning to utilize new languages and tools to become a better developer. </p>

                                <p className={pClass} style={pStyle}>
                                    Human centered design is especially important in an increasingly digital world. This is one of the aspects of design I am passionate about. Taking what I have learned about how humans think; such as how we process information, cognitive biases, and heuristics, in order to create a user-friendly innovative design. I am good at connecting ideas and looking at the whole picture in a design challenge, while still remaining detail-oriented. </p>

                                <p className={pClass} style={pStyle}>
                                    Although I am both a developer and a designer, my main focus is on the development process.

                                </p>
                            </Col>
                            <Col lg={6} sm={6} xs={6}>
                                <Image className={imgClass} src={climbingPhoto} style={{ width: "100%" }} />
                            </Col>
                        </Row>
                    </div>
                    <h2 className={h2Class} style={h2Style}> Programming Process</h2>
                    <p className={pClass} style={pStyle}>
                        When I’m working on a project it is inevitable that I will face complications, so having a process to face these obstacles is important.
                        My philosophy towards programming is very circular and includes a lot of inputs and outputs. I am constantly learning new things, applying
                        some of the things I learned to the current project I’m working on, getting stuck on something else (or the same thing),
                        going back to refine my understanding of the topic or learn a new topic, and the cycle continues. I personally find this process
                        very satisfying and it is one of the things I love about programming. This circular process also allows me to constantly
                        update my understanding of a topic and get better at it, while simultaneously developing new skills.
                    </p>
                    <div style={{ minHeight: "80px" }}></div>
                </div>
            </div>
        </div>
    )
}
