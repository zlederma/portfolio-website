import React from 'react'
import { Card, Row, Col } from "react-bootstrap"
import instacartLogo from '../assets/instacart-logo.png'
import blanketLogo from '../assets/blanket-logo.png'
import portfolio_ception_logo from '../assets/portfolio_ception_logo.jpg'


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
                                <Card className="m-3" style={{ height: "300px", width: "300px", boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px" }}>
                                    {/* makes the entire card clickable */}
                                    <a href={links[idx]} class="stretched-link"></a>
                                    <Card.Body>
                                        <Card.Title className="my-2" style={{ textAlign: "center" }}>{cardTitles[idx]}</Card.Title>
                                        <div style={{ display: "flex", justifyContent: "space-around" }}>
                                            <Card.Img className="mt-4" style={{ maxWidth: "150px", maxHeight: "150px" }}
                                                variant="top" src={images[idx]} />
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </div>
            </div>
        </div>
    )
}
