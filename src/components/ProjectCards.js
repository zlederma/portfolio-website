import React from 'react'
import { Card, Row, Col } from "react-bootstrap"
import instacartLogo from '../assets/instacart-logo.png'
import blanketLogo from '../assets/blanket-logo.png'

//These define the styling and classnames for the project Cards
const cardStyle = { border: "2px solid green" }
const cardClass = "m-3"

const cardTitles = ["Temperature Blanket", "Instacart Redesign", "Tri-dev"];
const images = [blanketLogo, instacartLogo, blanketLogo];
const links = ["/projects/temperature-blanket", "/projects/instacart-redesign, /projects/tri-dev"]
const shortDescription = ["test this description", "atwoehrt sdkfh sdfasdf", "fasdfa sadf asdf"]

export default function ProjectCards() {
    return (

        // backgroundColor: "#f0f0f0"
        <div>
            <div className="m-5" >
                <Row xs={1} md={2} lg={3} className="g-4">
                    {Array.from({ length: 3 }).map((_, idx) => (
                        <Col>
                            <Card className="my-3" style={{ height: "300px", width: "300px", boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px" }}>
                                {/* makes the entire card clickable */}
                                <a href={links[idx]} class="stretched-link"></a>
                                <Card.Body>
                                    <Card.Title style={{ textAlign: "center" }}>{cardTitles[idx]}</Card.Title>
                                    <div style={{ display: "flex", justifyContent: "space-around" }}>
                                        <Card.Img className="mt-4" style={{ maxWidth: "100px", maxHeight: "100px" }}
                                            variant="top" src={images[idx]} />
                                        {/* <p className="hoverDescription">{shortDescription}</p> */}
                                    </div>
                                    {/* <Card.Text>
                                    This is a longer card with supporting text below as a natural
                                    lead-in to additional content. This content is a little bit longer.
                                </Card.Text> */}
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </div>
        </div>
    )
}
