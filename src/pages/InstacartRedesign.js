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


export default function InstacartRedesign() {
    const [page, setPage] = useState(null);
    useEffect(() => {
        const data = getCaseStudy().then(data => setPage(data))
    }, []);

    (page !== null) ? console.log(page) : console.log("not yet");

    const showHero = () => {
        if (page !== null) {
            const data = page.caseStudyCollection.items[0].body.hero;
            console.log("this");
            console.log(data);
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
    const showSection = (index) => {
        if (page !== null) {
            const data = page.caseStudyCollection.items[0].body.section[index];
            console.log(data);
            return (
                <>
                    <h2 className="mb-2 mt-5 heading"> {data.headingText} </h2>
                    <div>
                        <Row>
                            <Col
                                lg={data.assets[0].colLarge}
                                sm={data.assets[0].colSmall}
                                xs={data.assets[0].colExtraSmall}>
                                <Image
                                    className={`image-${data.assets[0].imgWidth}`}
                                    src={data.assets[0].url} />
                            </Col>
                            <Col
                                lg={data.paragraph.colLarge}
                                sm={data.paragraph.colSmall}
                                xs={data.paragraph.colExtraSmall}>
                                <p
                                    className="mb-4 paragraph">
                                    {data.paragraph.text[0]}
                                </p>
                            </Col>
                        </Row>
                    </div>
                </>
            )
        }
        return <div> Loading...</div>;
    }


    return (
        <div>
            <div className="body">
                <div className="mx-4 container">
                    <div style={{ minHeight: "100px" }}></div>

                    {showHero()}
                    {showSection(0)}
                    <div style={{ minHeight: "80px" }}></div>

                </div>
            </div>
            <ProjectCards></ProjectCards>
        </div>
    )
}
