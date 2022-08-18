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

    const getTitle = () => {
        if (page !== null) {
            return page.caseStudyCollection.items[0].body.body[0].headingText;
        }
        return "";
    }

    const getParagraph = (index) => {
        if (page !== null) {
            return page.caseStudyCollection.items[0].body.body[index].text[0];
        }
        return "";
    }


    const getHeading = (index) => {
        if (page !== null) {
            return page.caseStudyCollection.items[0].body.body[index].headingText;
        }
        return "";
    }

    const getImage = (index) => {
        if (page !== null) {
            return page.caseStudyCollection.items[0].body.body[index].assets[0].url;
        }
        return "";
    }
    console.log(getImage(1));
    (page !== null) ? console.log(page) : console.log("not yet");
    console.log(page);

    const getSection = (index) => {
        if (page !== null) {
            return <div> Testinggggg</div>
        }
        return <div> nope</div>;
    }


    return (
        <div>
            <div className="body">
                <div className="mx-4 container">
                    <div style={{ minHeight: "100px" }}></div>

                    <h1 className={"title text-center display-4"}> {getTitle()} </h1>
                    {getSection(1)}
                    <Image className={"mb-2 mx-auto d-block"} src={photo_1} style={{ width: "80%" }} />

                    <p className="paragraph mb-4">
                        {getParagraph(0)}
                    </p>
                    <h2 className={h2Class} style={h2Style}> {getHeading(1)} </h2>
                    <div>
                        <Row>
                            <Col lg={6} sm={6} xs={6}>
                                <Image src={getImage(1)} style={{ width: "100%" }} />
                            </Col>
                            <Col lg={6} sm={12} xs={12}>
                                <p className={pClass} style={pStyle}>
                                    Instacart allows users to check out from multiple stores at once, however many of our users found this confusing. How did my team and I utilize established design principles in order to make this feature more seamless for the average user.
                                </p>
                            </Col>
                        </Row>
                    </div>
                    <div style={{ minHeight: "80px" }}></div>

                </div>
            </div>
            <ProjectCards></ProjectCards>
        </div>
    )
}
