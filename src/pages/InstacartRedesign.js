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

const h1Style = {
    color: "#c5462c",
    fontWeight: "700",
    fontFamily: "Roboto",

}
const h2Style = {
    color: "rgb(30,30,30)",
    fontWeight: "600",
    fontFamily: "Roboto",
    fontSize: "30px"
}
const pStyle = {
    fontSize: "20px",

}
//className for paragraph elements
const h1Class = "mb-2"
const h2Class = "mb-2 mt-5"
const pClass = "mb-4"
const imgClass = "mb-2"

export default function InstacartRedesign() {
    const [page, setPage] = useState(null);
    useEffect(() => {
        const data = getCaseStudy().then(data => setPage(data))
        // console.log(page);
        // console.log(page.caseStudyCollection.items[0].body.body[0].text[0]);
        // const data = page.caseStudyCollection.items[0].body.body;
        //
    }, []);

    (page !== null) ? console.log(page) : console.log("not yet");
    const data = page.caseStudyCollection.items[0].body.section[0];
    console.log(data);
    const getSection = (index) => {
        if (page !== null) {
            const data = page.caseStudyCollection.items[0].body.section[index];
            console.log(data);
            return (
                <>
                    <h2 className="mb-2 mt-5 heading"> {data.headingText} </h2>
                    <div>
                        <Row>
                            <Col lg={6} sm={6} xs={12}>
                                <Image className="image-100" src={data.assets[0].url} />
                            </Col>
                            <Col lg={6} sm={6} xs={12}>
                                <p className={pClass} style={pStyle}>
                                    {data.paragraph.text[0]}
                                </p>
                            </Col>
                        </Row>
                    </div>
                </>
            )
        }
        return <div> nope</div>;
    }


    return (
        <div>
            <div className="body">
                <div className="mx-4 container">
                    <div style={{ minHeight: "100px" }}></div>

                    <h1 className={"title text-center display-4"}> Instacart Redesign </h1>
                    <Image className={"mb-2 mx-auto d-block"} src={photo_1} style={{ width: "80%" }} />

                    <p className="paragraph mb-4">
                        asgda
                    </p>
                    {getSection(0)}
                    <div style={{ minHeight: "80px" }}></div>

                </div>
            </div>
            <ProjectCards></ProjectCards>
        </div>
    )
}
