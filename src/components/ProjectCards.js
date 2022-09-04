import React from 'react'
import { Card, Row, Col } from "react-bootstrap"
import instacartLogo from '../assets/instacart-logo.png'
import blanketLogo from '../assets/blanket-logo.png'
import portfolio_ception_logo from '../assets/portfolio_ception_logo.jpg'
import triton_jam_logo from '../assets/triton-jam-logo.png'
import ProjectCard from './ProjectCard'
import "./CardStyles.css"
import { getProjectCards } from '../utils/project-cards-fetcher'
import { useState, useEffect } from "react"

//Change this to be controlled from CMS
const cardTitles = ["Triton Jam", "Temperature Blanket", "Instacart Redesign", "Portfolioception"];
const images = [triton_jam_logo, blanketLogo, instacartLogo, portfolio_ception_logo];
const links = ["/projects/triton-jam", "/projects/temperature-blanket", "/projects/instacart-redesign", "/projects/portfolioception"]

export default function ProjectCards() {
    const [page, setPage] = useState(null);
    useEffect(() => {
        getProjectCards().then(data => setPage(data))
    }, []);
    // console.clear();
    if (page !== null) {
        // const heroData = page.caseStudyCollection.items[0].hero;
        // const sectionsData = page.caseStudyCollection.items[0].sections;
        console.log(page);
    }
    return (
        <div>test</div>
        // <div style={{ border: "1px solid lightgray" }}>
        //     <div className="card__container">
        //         <div className="p-4" style={{ width: "1100px" }}>
        //             <Row className="g-4" xs={1} md={1} lg={3}>
        //                 {Array.from({ length: 4 }).map((_, idx) => (
        //                     <Col>
        //                         <ProjectCard link={links[idx]}
        //                             title={cardTitles[idx]}
        //                             image={images[idx]} />
        //                     </Col>
        //                 ))}
        //             </Row>
        //         </div>
        //     </div>
        // </div >
    )
}
