import React from 'react'
import { Card, Row, Col } from "react-bootstrap"
import instacartLogo from '../assets/instacart-logo.png'
import blanketLogo from '../assets/blanket-logo.png'
import portfolio_ception_logo from '../assets/portfolio_ception_logo.jpg'
import ProjectCard from './ProjectCard'


const cardTitles = ["Temperature Blanket", "Instacart Redesign", "Portfolioception"];
const images = [blanketLogo, instacartLogo, portfolio_ception_logo];
const links = ["/projects/temperature-blanket", "/projects/instacart-redesign", "/projects/portfolioception"]

export default function ProjectCards() {
    return (


        // backgroundColor: "#f0f0f0"
        <div id="Projects" style={{ border: "1px solid lightgray", minHeight: "35vh" }}>
            <div classname="m-3" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                <div style={{ width: "1100px" }}>
                    <Row xs={1} md={2} lg={3} className="g-4">
                        {Array.from({ length: 3 }).map((_, idx) => (
                            <Col>
                                <ProjectCard link={links[idx]}
                                    title={cardTitles[idx]}
                                    image={images[idx]} />
                            </Col>
                        ))}
                    </Row>
                </div>
            </div>
        </div>
    )
}
