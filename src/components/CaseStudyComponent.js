import { Image, Row, Col } from 'react-bootstrap';
import { getCaseStudy } from '../utils/case-study-fetcher';
import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import { useState, useEffect } from "react";
import Iframe from 'react-iframe';
import Technologies from './Technologies';
import Links from './Links'
import Projects from './Projects';
import Brand from './Brand';
import "../styles/CaseStudyStyles.css";
import Navigation from './Navigation'
// Todo: get the projects section to not AnimationEffect, and do some pagination
const showHero = (data) => {
    return (
        <div className='case-study__hero-wrapper'>
            <div className='case-study__hero-container'>
                <h1 className={"title text-center display-4"}> {data.headingText} </h1>
                <Image className={"mb-2 mx-auto d-block image-80 hero-image "} src={data.src} />
                {data.technologies ? <Technologies data={data.technologies} /> : <></>}
                <p className="paragraph mb-4">
                    {data.text}
                </p>
            </div>
        </div>

    )
}
const showElement = (elementData) => {
    if (elementData.type === "P") {
        return (
            <p className="mb-4 paragraph">
                {ReactHtmlParser(elementData.value)}
            </p>
        )
    }
    if (elementData.type === "I") {
        return (
            <Image
                className={`${elementData.class} mb-4`}
                src={elementData.value} />
        )
    }
    if (elementData.type === "F") {
        return (
            <Iframe
                className={elementData.class}
                src={elementData.value}
                width={elementData.width}
                height={elementData.height}
                sandbox=''
                loading="lazy"
                allowFullScreen />
        )
    }
}

const showElements = (elementsData) => {
    let elements = [];
    for (let i = 0; i < elementsData.length; i++) {
        elements.push(showElement(elementsData[i]));
    }
    return elements;
}

const showCol = (colData) => {
    return (
        <Col lg={colData.lg} sm={colData.sm} xs={colData.xs}>
            {showElements(colData.elem)}
        </Col>
    )
}

const showCols = (colsData) => {
    let cols = [];
    for (let i = 0; i < colsData.length; i++) {
        cols.push(showCol(colsData[i]));
    }
    return cols;

}

const showRow = (rowData) => {
    return (
        <Row className={rowData.rowClass}>
            {showCols(rowData.col)}
        </Row>
    )
}

const showRows = (rowsData) => {
    let rows = [];
    for (let i = 0; i < rowsData.length; i++) {
        rows.push(showRow(rowsData[i]));
    }
    return rows;
}

const showSection = (sectionData) => {
    return (
        <>
            {/* Add something for heading and something for subheading */}
            {sectionData.headingText ?
                <h2 className="mb-2 mt-2 heading">
                    {sectionData.headingText} </h2> : <></>}
            {sectionData.subHeadingText ?
                <h3 className="mb-2 subheading">
                    {sectionData.subHeadingText} </h3> : <></>}
            <div>
                {showRows(sectionData.row)}
            </div>
        </>
    )

}

const showSections = (sectionsData) => {
    let sections = [];
    for (let i = 0; i < sectionsData.section.length; i++) {
        sections.push(showSection(sectionsData.section[i]))
    }
    return sections;

}

export const CaseStudyComponent = (slug) => {
    const [page, setPage] = useState(null);
    useEffect(() => {
        getCaseStudy(slug).then(data => setPage(data))
    }, [slug]);
    console.clear();
    if (page !== null) {
        const heroData = page.caseStudyCollection.items[0].hero;
        const sectionsData = page.caseStudyCollection.items[0].sections;
        return (
            <div>
                <Navigation />
                {showHero(heroData)}
                <div className="sections-wrapper">
                    <div className="mx-4 sections-container">{showSections(sectionsData)}
                    </div>
                </div>
            </div>
        )
    }
    return (
        <div>Loading...</div>
    )
}