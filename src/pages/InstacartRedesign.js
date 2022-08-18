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
        const data = getCaseStudy().then(data => setPage(data));
    }, []);
    console.log(page);
    console.log(page.caseStudyCollection.items[0].body.body);
    return (
        <div>
            <div style={{ display: "flex", justifyContent: "center" }}>
                <div className="mx-4" style={{ maxWidth: "1100px", minHeight: "100vh" }}>
                    <div style={{ minHeight: "100px" }}></div>

                    <h1 className={`${h1Class} text-center display-4 `} style={h1Style}> Instacart Redesign </h1>
                    <Image className={`${imgClass} mx-auto d-block`} src={photo_1} style={{ width: "80%" }} />

                    <p className={pClass} style={pStyle}>
                        Instacart is an app that allows users to order groceries online and have them delivered to the person’s door. This app has especially gained popularity during COVID-19, and navigating through the app it is clear that the app is well thought out and designed. My team and I wanted to challenge ourselves to discover issues in this app and come up with a solution to help fix issues we found. We this by combing through the app, creating a user testing plan, and then seeing where our users had issues with the app.
                    </p>
                    <h2 className={h2Class} style={h2Style}> Problem </h2>
                    <div>
                        <Row>
                            <Col lg={6} sm={6} xs={6}>
                                <Image src={problem_image} style={{ width: "100%" }} />
                            </Col>
                            <Col lg={6} sm={12} xs={12}>
                                <p className={pClass} style={pStyle}>
                                    Instacart allows users to check out from multiple stores at once, however many of our users found this confusing. How did my team and I utilize established design principles in order to make this feature more seamless for the average user.
                                </p>
                            </Col>
                        </Row>
                    </div>

                    <h2 className={h2Class} style={h2Style}> Beginning the Project and Interviews </h2>
                    <div>
                        <Row>
                            <Col lg={6} sm={12} xs={12}>
                                <p className={pClass} style={pStyle}>
                                    Using our knowledge of good digital design, and especially paying attention to usability heuristics, my team of 3 and I combed through the app trying to get a general idea of what some of the pitfalls of the app might be. We used this as a basis to come up with our user testing plan. Our goal was to specifically target some areas of the app that we thought might be problematic for users, while also keeping some of the tasks general enough that we might discover some usability issues that we did not initially notice.We started by asking each user about their general background and familiarity with the app. We then moved onto asking them to preform specific tasks. Due to working on this project during COVID, we utilized screen mirroring on zoom, and also asked our interviewees to turn on their cameras so we could see their facial expressions as they navigate through the app. After our users finished the tasks we asked some closing questions to see how they felt about their experience.
                                </p>
                            </Col>
                            <Col lg={6} sm={8} xs={8}>
                                <Image src={heuristics} style={{ width: "100%", borderLeft: "3px solid #c5462c ", boxShadow: "rgba(0, 0, 0, 0.12) 0px 2px 3px, rgba(0, 0, 0, 0.24) 0px 1px 3px" }} />
                            </Col>
                        </Row>
                    </div>
                    <h2 className={h2Class} style={h2Style}> Insight from User Testing </h2>
                    <div>
                        <Row>
                            <Col lg={6} sm={8} xs={8}>
                                <Image src={main_issues} style={{ width: "100%" }} />
                            </Col>
                            <Col lg={6} sm={12} xs={12}>
                                <p className={pClass} style={pStyle}>
                                    After we interviewed each user we made a list of the top 3 usability issues they experienced. If I were to redo this project I would emphasize a larger sample size, as the sample size used in this project is 4. However, even though our sample was small, strong patterns still emerged. Here is a compilation of the top 2 usability issues we uncovered.
                                </p>


                                <p className={pClass} style={pStyle}><strong> 1. User control and freedom: </strong>Users only have the option to check out at one store at a time or check out at all stores at once They lose control over store selection when checking out.</p>
                                <p className={pClass} style={pStyle}> <strong>2.Flexibility and efficiency of user: </strong> Users have difficulty continuing to shop at a specific store, and they believed that clicking certain icons would lead them to the homepage of the store.</p>
                                <p className={pClass} style={pStyle}>
                                    Overall we found that the shopping experience went pretty smoothly, and the users felt that Instacart was easy to navigate. Most of the issues came from the shopping cart page.
                                </p>

                            </Col>
                        </Row>
                    </div>

                    <h2 className={h2Class} style={h2Style}>Using that Insight  </h2>
                    <p className={pClass} style={pStyle}>
                        From the user testing it was clear that the area of the app that needed the most redesigning was the cart page. We wanted to keep our scope small, so we decided to do a redesign that would allow users to check out at stores with more flexibility.
                    </p>
                    <h2 className={h2Class} style={h2Style}>Competitive Analysis  </h2>
                    <p className={pClass} style={pStyle}>
                        Our first step after we settled on what to redesign was to see what solutions other similar apps came up with. As fun as it is to come up with a completely novel solution, good design often comes from seeing what else has been successfully implemented, and using that as a blueprint. We took a look at Doordash, Shipt, and Amazon.

                    </p>
                    <div>
                        <Row className={pClass}>
                            <Col lg={6} sm={12} xs={12}>
                                <p className={pClass} style={pStyle}>
                                    Doordash solves the problem by simply not letting the user have multiple carts, and instead forcing them to discard their entire cart. Again, we still want to allow our users to interact with multiple carts at once.
                                </p>
                            </Col>
                            <Col lg={6} sm={8} xs={8}>
                                <Image src={doordash} style={{ width: "100%" }} />
                            </Col>
                        </Row>
                        <Row className={pClass}>
                            <Col lg={4} sm={12} xs={12}>
                                <p className={pClass} style={pStyle}>
                                    Shipt solves the problem by only letting the user interact with one cart at a time, however we want to allow users to continue interacting with multiple carts at a time.
                                </p>
                            </Col>
                            <Col lg={8} sm={8} xs={8}>
                                <Image src={shipt} style={{ width: "100%" }} />
                            </Col>
                        </Row>
                        <Row className={pClass}>
                            <Col lg={6} sm={12} xs={12}>
                                <p className={pClass} style={pStyle}>
                                    Amazon had the solution we were most interested in. It allows users to checkout with one cart at a time, therefore not forcing the user to checkout with everything at once.
                                </p>
                            </Col>
                            <Col lg={6} sm={8} xs={8}>
                                <Image src={amazon} style={{ width: "100%" }} />
                            </Col>
                        </Row>

                    </div>

                    <h2 className={h2Class} style={h2Style}>
                        Starting to Craft our Solution
                    </h2>
                    <p className={pClass} style={pStyle}>

                        To create potential solutions for our redesign component, we created multiple UI sketches that address the design solution in different ways. Here are a few of the sketches and wireframes we created.

                    </p>
                    <Image className={`${imgClass} mx-auto d-block`} src={sketches} style={{ width: "80%" }} />
                    <h2 className={h2Class} style={h2Style}> Prototype 1 </h2>
                    <p className={pClass} style={pStyle}>
                        This redesign attempts to solve the usability problem we selected by not only giving the user the option to checkout at one or more stores at a time, but also making it clear which stores they are checking out at. We chose to utilize a pop-up for this redesign because it allowed the main screen to remain uncluttered, while still giving more functionality to the user. We chose to keep the original design of having the personal cart contain groceries from multiple stores, instead of breaking it up more explicitly into multiple carts, as during user testing there did not seem to be a huge amount of confusion regarding the long continuous cart.
                    </p>
                    <Iframe src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2Fr13yAno8SYx99NAcxvNbWp%2FInstacart-Redesign-Prototypes%3Fpage-id%3D84%253A0%26node-id%3D186%253A175%26viewport%3D241%252C48%252C0.05%26scaling%3Dscale-down%26starting-point-node-id%3D186%253A175"
                        width="100%"
                        height="700px"
                        allowFullScreen
                    />
                    <h2 className={h2Class} style={h2Style}> Prototype 2 </h2>
                    <p className={pClass} style={pStyle}>
                        For this prototype we wanted to give users an easy way to interact with one cart at a time, while also having the ability to interact with all the carts at once. This redesign also added signifiers to show when a user has not met the $10 store minimum.
                    </p>

                    <Iframe src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2Fr13yAno8SYx99NAcxvNbWp%2FInstacart-Redesign-Prototypes%3Fpage-id%3D44%253A188%26node-id%3D100%253A1962%26viewport%3D241%252C48%252C0.03%26scaling%3Dscale-down%26starting-point-node-id%3D136%253A1357"
                        width="100%"
                        height="700px"
                        allowFullScreen
                    />
                    <h2 className={h2Class} style={h2Style}>Round 2 User Testing </h2>
                    <p className={pClass} style={pStyle}>
                        In order to see how users responded to our redesigns we did more user testing. We utilized the same process from the first round of user testing, except we changed the task to be more specific to the checkout process. In order to get some quantitative data we also asked the users to rate each of the redesigns on a scale from 1-10. We hoped this would help us compare the redesigns, and help us discover the usability of the prototypes.
                    </p>
                    <h2 className={h2Class} style={h2Style}>Prototype Analysis</h2>
                    <p className={pClass} style={pStyle}>
                        We used our second round of user testing in order see how users responded to our redesigns. For Prototype 1 Our users found that they had an efficient way to checkout which store(s) to checkout from. The pop-up menu for selecting which store(s) to checkout from opens up on the same page, this allows the user to stay on the same screen without navigating away.


                    </p>
                    <p className={pClass} style={pStyle}>Overall the redesign was very successful and received an average rating of 8.5/10 from the users when asked how they would rate their experience with the cart feature. It solved the usability issue we were working on and was clear to the users tested.</p>

                    <p className={pClass} style={pStyle}>
                        Prototype 2 allow for a useful and innovative way to switch between different store shopping carts. Our users had a small amount of confusion on what the the circles for each store was, and how to check out for multiple stores.
                    </p>
                    <p className={pClass} style={pStyle}>

                        The redesign was very successful and and received an average rating of 8/10 from the user when asked how they would rate their experience with the cart feature.

                    </p>
                    <h2 className={h2Class} style={h2Style}>
                        Final Recommendations
                    </h2>
                    <p className={pClass} style={pStyle}>
                        Both prototypes were successful in accomplishing their goals. However, based on user feedback Prototype 1 caused the least amount of confusion and highest ratings among the users. For that reason, if we were on Instacart’s design team we would recommend implementing Prototype 1 into the design of the app.
                    </p>
                    <div style={{ minHeight: "80px" }}></div>

                </div>
            </div >
            <ProjectCards></ProjectCards>
        </div>
    )
}
