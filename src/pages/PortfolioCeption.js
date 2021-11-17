import React from 'react'
import ProjectCards from '../components/ProjectCards'
import { Image, Row, Col } from 'react-bootstrap'
import jsLogo from '../assets/javascript-logo.png'
import rLogo from '../assets/react-logo.png'
import bootstrap_logo from '../assets/bootstrap-logo.png'
import ception_photo from '../assets/ception-photo.png'
import RepoButton from '../assets/RepoButton'
import technologies from '../assets/technologies.png'



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
const h1Class = "mb-4"
const h2Class = "mb-2 mt-5"
const pClass = "mb-4"
const imgClass = "mb-2"

export default function PortfolioCeption() {
    return (
        <div>
            <div style={{ display: "flex", justifyContent: "center" }}>
                <div className="mx-4" style={{ maxWidth: "1100px" }}>
                    <div style={{ minHeight: "100px" }}></div>

                    <h1 className={`${h1Class} text-center display-4 `} style={h1Style}> Portfolioception </h1>
                    <div>
                        <Row>
                            <Col lg={8} md={12}>
                                <Image className={`${imgClass} mx-auto d-block mb-4`} src={ception_photo} style={{ width: "90%" }} />
                            </Col>
                            <Col lg={4} style={{ display: "flex", alignItems: "center" }}>
                                <div className="mx-auto d-block mb-3" style={{
                                    paddingTop: "15px", width: "350px",
                                    boxShadow: "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px"
                                }}>
                                    <Image src={technologies} style={{ width: "300px", paddingBottom: "10px" }} ></Image>
                                    <div style={{ borderTop: "1px solid lightgray" }}></div>
                                    <div className="my-3" style={{ display: "flex", justifyContent: "center" }}>

                                        <a href="https://github.com/zlederma/portfolio-website" target="_blank" rel="noreferrer" > <RepoButton className="mt-3" style={{ boxShadow: "rgba(0, 0, 0, 0.12) 0px 2px 3px, rgba(0, 0, 0, 0.24) 0px 1px 3px" }}>
                                        </RepoButton> </a>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>


                    <p className="mt-4" style={pStyle}> <strong>Ception: </strong> “A suffix combined with a noun to indicate a layering, nesting, or recursion of the thing in question.”</p>

                    <h2 className={h2Class} style={h2Style}> Process</h2>
                    <p className={pClass} style={pStyle}>
                        This is an important project for me. I wanted to create a representation of myself and my skills that I could use to show to recruiters. From a design standpoint, I wanted to show my design style, which leans towards a minimalistic, succinct style. From a developer standpoint, I wanted to show that I could develop something functional responsive and of a high quality.</p>

                    <h2 className={h2Class} style={h2Style}> Tools</h2>
                    <div style={{ maxWidth: "500px" }} >
                        <Image src={jsLogo} style={{ width: "100px" }} />
                        <Image src={rLogo} style={{ width: "100px" }} />
                        <Image src={bootstrap_logo} style={{ width: "100px" }} />
                    </div>
                    <p className={pClass} style={pStyle}>
                        This project was really fun to make. By the time I created it, for most of the coding I could go into autopilot. I used Javascript and React for this project. I also utilized Bootstrap’s framework in order to make the website as responsive as possible.</p>


                    <div style={{ minHeight: "80px" }}></div>



                </div>

            </div >
            <ProjectCards></ProjectCards>
        </div>
    )
}
