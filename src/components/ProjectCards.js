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

const calculateLgColLength = (length, index) => {
    if (length % 3 === 1 && index === length - 1) {
        return 12;
    }
    if (length % 3 === 2 && index >= length - 2) {
        return 6;
    }
    return 4;
}

const calculateSmColLength = (length, index) => {
    if (length % 2 === 1 && index === length - 1) {
        return 12;
    }

    return 6;
}

const showColumns = (cardsData) => {
    let columns = [];
    let lg = 4; //default lg value
    let sm = 6;
    for (let i = 0; i < cardsData.length; i++) {
        lg = calculateLgColLength(cardsData.length, i);
        sm = calculateSmColLength(cardsData.length, i)
        columns.push(showColumn(cardsData[i], lg, sm))
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

export default function ProjectCards(slug) {
    const [page, setPage] = useState(null);
    useEffect(() => {
        getProjectCards(slug).then(data => setPage(data))
    }, []);
    console.clear();
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
