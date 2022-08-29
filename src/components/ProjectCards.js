import React from 'react'
import { Card, Row, Col } from "react-bootstrap"
import instacartLogo from '../assets/instacart-logo.png'
import blanketLogo from '../assets/blanket-logo.png'
import portfolio_ception_logo from '../assets/portfolio_ception_logo.jpg'
import ProjectCard from './ProjectCard'
import "./CardStyles.css"

//Change this to be controlled from CMS
const cardTitles = ["Temperature Blanket", "Instacart Redesign", "Portfolioception"];
const images = [blanketLogo, instacartLogo, portfolio_ception_logo];
const links = ["/projects/temperature-blanket", "/projects/instacart-redesign", "/projects/portfolioception"]

export default function ProjectCards() {
    return (
        <div style={{ border: "1px solid lightgray" }}>
            <div className="card__container">
                <div className="p-4" style={{ width: "1100px" }}>
                    <Row className="g-4" xs={1} md={1} lg={3}>
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
        </div >
    )
}
