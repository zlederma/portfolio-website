import { Image, Row, Col } from 'react-bootstrap';
import { getCaseStudy } from './case-study-fetcher';
import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import { useState, useEffect } from "react";
import Iframe from 'react-iframe'

let rowSpace = 0; //Keeps track of when content needs to move to the next row
let count = 0; //Keeps track of how many total elements there are to render
let textCount = 0; //Helps render multiple paragraphs

const showHero = (data) => {
    return (
        <>
            <h1 className={"title text-center display-4"}> {data.headingText} </h1>
            <Image className={"mb-2 mx-auto d-block image-80"} src={data.url} />
            <p className="paragraph mb-4">
                {data.text}
            </p>
        </>
    )
}


const showParagraphs = (data) => {
    const paragraphs = [];
    while (data.order[count] === 0) {
        paragraphs.push(
            <p
                className="mb-4 paragraph">
                {ReactHtmlParser(data.paragraph.text[textCount])}
            </p>
        )
        count++;
        textCount++;
    }
    return paragraphs;
}
const showRow = (data) => {
    const cols = [];
    while (rowSpace < 12 && count < data.order.length) {
        if (data.order[count] === 0) {
            cols.push(
                <Col
                    lg={data.paragraph.colLarge}
                    sm={data.paragraph.colSmall}
                    xs={data.paragraph.colExtraSmall}>
                    {showParagraphs(data)}
                </Col>)
        }
        if (data.order[count] === 1) {
            cols.push(
                <Col
                    lg={data.assets[0].colLarge}
                    sm={data.assets[0].colSmall}
                    xs={data.assets[0].colExtraSmall}>
                    <Image
                        className={`image-${data.assets[0].imgWidth} ${data.assets[0].class}`}
                        src={data.assets[0].url} />
                </Col>)
        }
        rowSpace += data.size[count];
        count++;
    }
    rowSpace = 0;
    return cols;
}

const showRows = (data) => {
    const rows = [];
    while (count < data.order.length) {
        rows.push(
            <Row>
                {showRow(data)}
            </Row>
        )
    }
    return rows;
}

const showSection = (index, sectionsData) => {
    count = 0;
    rowSpace = 0;
    textCount = 0;
    return (
        <>
            <h2 className="mb-2 mt-5 heading"> {sectionsData[index].headingText} </h2>
            <div>
                {showRows(sectionsData[index])}
            </div>
        </>
    )
}

const showSections = (sectionsData) => {
    const sections = [];
    for (let i = 0; i < sectionsData.length; i++) {
        sections.push(showSection(i, sectionsData))
    }
    return sections;
}

export const CaseStudyComponent = (slug) => {
    const [page, setPage] = useState(null);
    useEffect(() => {
        getCaseStudy(slug).then(data => setPage(data))
    }, []);
    if (page !== null) {
        const heroData = page.caseStudyCollection.items[0].body.hero;
        const sectionsData = page.caseStudyCollection.items[0].body.section;
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