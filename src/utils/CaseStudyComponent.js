import { Image, Row, Col } from 'react-bootstrap';
import { getCaseStudy } from './case-study-fetcher';
import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import { useState, useEffect } from "react";
import Iframe from 'react-iframe';

const showHero = (data) => {
    return (
        <>
            <h1 className={"title text-center display-4"}> {data.headingText} </h1>
            <Image className={"mb-2 mx-auto d-block image-80"} src={data.src} />
            <p className="paragraph mb-4">
                {data.text}
            </p>
        </>
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
                className={elementData.class}
                src={elementData.value} />
        )
    }
    if (elementData.type === "F") {
        return (
            <Iframe
                className={elementData.class}
                src={elementData.value}
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
    console.log(rowData)
    return (
        <Row>
            {showCols(rowData.col)}
        </Row>
    )
}

const showRows = (rowsData) => {
    console.log(rowsData)
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
                <h2 className="mb-2 mt-5 heading">
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
    }, []);
    if (page !== null) {
        // console.log(page);
    }
    if (page !== null) {
        const heroData = page.caseStudyCollection.items[0].hero;
        const sectionsData = page.caseStudyCollection.items[0].sections;
        // console.log(sectionsData);
        // console.log(sectionsData.section[1].row[1]);
        return (
            <div className="body">
                <div className="mx-4 container">
                    <div style={{ minHeight: "100px" }}></div>
                    {showHero(heroData)}
                    {showSections(sectionsData)}
                    <div style={{ minHeight: "80px" }}></div>
                </div>
            </div>

        )
    }
    return (
        <div>Loading...</div>
    )
}