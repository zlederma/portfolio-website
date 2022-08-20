import React from 'react'
import Iframe from 'react-iframe'
import { Image, Row, Col } from 'react-bootstrap'
import ProjectCards from '../components/ProjectCards'
import photo_1 from '../assets/instacart/photo-1.png'
import heuristics from '../assets/instacart/heuristics.jpg'
import problem_image from '../assets/instacart/problem.jpg'
import main_issues from '../assets/instacart/main_issues.jpg'
import sketches from '../assets/instacart/sketches.jpg'
import amazon from '../assets/instacart/amazon.jpg'
import shipt from '../assets/instacart/shipt.jpg'
import doordash from '../assets/instacart/doordash.jpg'
import { useState, useEffect } from "react";
import { getCaseStudy } from '../utils/case-study-fetcher';
import "./CaseStudyStyles.css"
import ReactHtmlParser from 'react-html-parser';
import { CaseStudyComponent } from '../utils/CaseStudyComponent';


export default function InstacartRedesign() {
    const [page, setPage] = useState(null);
    useEffect(() => {
        const data = getCaseStudy().then(data => setPage(data))
    }, []);

    (page !== null) ? console.log(page) : console.log("not yet");
    const showHero = () => {
        if (page !== null) {
            const data = page.caseStudyCollection.items[0].body.hero;
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
        return <div> Loading...</div>;
    }

    let rowSpace = 0;
    let count = 0; //keeps track of how many total elements there are to render
    let textCount = 0;

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

    const showSection = (index) => {
        if (page !== null) {
            const data = page.caseStudyCollection.items[0].body.section[index];
            console.log(data);
            count = 0;
            rowSpace = 0;
            textCount = 0;
            return (
                <>
                    <h2 className="mb-2 mt-5 heading"> {data.headingText} </h2>
                    <div>
                        {showRows(data)}
                    </div>
                </>
            )
        }
        return <div> Loading...</div>;
    }

    const showSections = () => {
        const sections = [];
        for (let i = 0; i < 3; i++) {
            sections.push(showSection(i))
        }
        return sections;
    }


    return (
        <div>
            <div className="body">
                <div className="mx-4 container">
                    <div style={{ minHeight: "100px" }}></div>
                    {/* {showHero()}
                    {showSections()} */}
                    <CaseStudyComponent></CaseStudyComponent>
                    <div style={{ minHeight: "80px" }}></div>
                    <p
                        className="mb-4 paragraph">
                    </p>
                </div>
            </div>
            <ProjectCards></ProjectCards>
        </div>
    )
}
