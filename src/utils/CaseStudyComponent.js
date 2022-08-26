import { Image, Row, Col } from 'react-bootstrap';
import { getCaseStudy } from './case-study-fetcher';
import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import { useState, useEffect } from "react";

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

}

const showElements = (elementsData) => {

}
const showCol = (colData) => {

}

const showCols = (colsData) => {

}

const showRow = (rowData) => {
    return (
        <Row>
            {/* {showCols(rowData)} */}
        </Row>
    )
}

const showRows = (rowsData) => {

}

const showSection = (sectionData) => {

}

const showSections = (sectionsData) => {

}




export const CaseStudyComponent = (slug) => {
    const [page, setPage] = useState(null);
    useEffect(() => {
        getCaseStudy(slug).then(data => setPage(data))
    }, []);
    if (page !== null) {
        console.log(page);
    }
    if (page !== null) {
        const heroData = page.caseStudyCollection.items[0].hero;
        const sectionsData = page.caseStudyCollection.items[0].sections;
        console.log(sectionsData);
        console.log(sectionsData.section[1].row[1]);
        return (
            <div className="body">
                <div className="mx-4 container">
                    <div style={{ minHeight: "100px" }}></div>
                    {showHero(heroData)}
                    {/* {showSections(sectionsData)} */}
                    <div style={{ minHeight: "80px" }}></div>
                </div>
            </div>

        )
    }
    return (
        <div>Loading...</div>
    )
}