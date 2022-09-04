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

const showCard = (cardData) => {
    return (
        <ProjectCard
            title={cardData.title}
            image={cardData.image}
            link={cardData.link} />
    )
}

const showColumn = (cardData, lg, sm) => {
    return (
        <Col xs={12} sm={sm} lg={lg}>
            {showCard(cardData)}
        </Col>
    )
}

const showColumns = (cardsData) => {
    let columns = [];
    for (let i = 0; i < cardsData.length; i++) {
        columns.push(showColumn(cardsData[i], 4, 12))
    }
    return columns;
}

const showGrid = (cardsData) => {
    return (
        <Row className="g-4">
            {showColumns(cardsData)}
        </Row>
    )
}

export default function ProjectCards() {
    const [page, setPage] = useState(null);
    useEffect(() => {
        getProjectCards().then(data => setPage(data))
    }, []);
    // console.clear();
    if (page !== null) {
        const cardsData = page.cardsCollection.items[0].cards.cards;
        console.log(cardsData);

        return (
            <div style={{ border: "1px solid lightgray" }}>
                <div className="card__container">
                    <div className="p-4" style={{ width: "1100px" }}>
                        {showGrid(cardsData)}
                    </div>
                </div>
            </div >
        )
    }
    return (
        <div>loading...</div>
    )
}
