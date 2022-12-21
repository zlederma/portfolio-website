import ProjectCards from '../components/ProjectCards'
import { Image, Row, Col } from 'react-bootstrap'
import jsLogo from '../assets/javascript-logo.png'
import rLogo from '../assets/react-logo.png'
import openWeatherLogo from '../assets/open-weather-logo.jpg'
import tempBlanket1 from '../assets/tempblanket/temp-blanket1.png'
import RepoButton from '../assets/RepoButton'
import Technologies from '../assets/tempblanket/technologies.png'

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
const h1Class = "mb-4"
const h2Class = "mb-2 mt-5"
const pClass = "mb-4"
const imgClass = "mb-2"



export default function TemperatureBlanket() {
    return (
        <div>
            <div style={{ display: "flex", justifyContent: "center" }}>
                <div className="mx-4" style={{ maxWidth: "1100px" }}>
                    <div style={{ minHeight: "100px" }}></div>
                    <h1 className={`${h1Class} text-center display-4 `} style={h1Style}> Temperature Blanket </h1>
                    <div>
                        <Row>
                            <Col lg={8} md={12}>
                                <Image className={`${imgClass} mx-auto d-block mb-4`} src={tempBlanket1} style={{ width: "90%" }} />
                            </Col>
                            <Col lg={4} style={{ display: "flex", alignItems: "center" }}>
                                <div className="mx-auto d-block mb-3" style={{
                                    paddingTop: "15px", width: "350px",
                                    boxShadow: "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px"
                                }}>
                                    <Image src={Technologies} style={{ width: "300px", paddingBottom: "10px" }} ></Image>
                                    <div style={{ borderTop: "1px solid lightgray" }}></div>
                                    <div className="my-3" style={{ display: "flex", justifyContent: "center" }}>

                                        <a href="https://github.com/zlederma/weather-blanket" target="_blank" rel="noreferrer" > <RepoButton className="mt-3" style={{ boxShadow: "rgba(0, 0, 0, 0.12) 0px 2px 3px, rgba(0, 0, 0, 0.24) 0px 1px 3px" }}>
                                        </RepoButton> </a>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                    <h2 className={h2Class} style={h2Style}> Tik-Tok Trend in Digital Form </h2>
                    <p className={pClass} style={pStyle}> My inspiration for this project came from a Tik-Tok trend.
                        In the trend people would crochet one line of a blanket for every day of weather data. After
                        seeing several of these videos, decided I wanted to digitalize it. I wanted to create a web application
                        where people can search a location and then a year of weather data would get output in a visual way.
                        There were just a couple of roadblocks with this idea, namely, that up to this point I had experience
                        with java, and a bit of CSS and HTML, useful languages, but definitely not the only tools necessary to
                        create this project.</p>
                    <h2 className={h2Class} style={h2Style}> Process</h2>
                    <p className={pClass} style={pStyle}>
                        One of the hardest things about anything in programming, is not knowing
                        what you don’t know. When I went into this project, I had a good understanding of a lot of basic
                        programming concepts from my college courses, however college courses are a lot more conceptual
                        than directly applicable. I didn’t really know how to select which tools I needed for this project.
                        I definitely can not list all the resources I used for building this web application. But among
                        them consisted of a multi-week Coursera course, binging several youtube channels, and tracing
                        through a lot of example code. For this project, I ended up using Javascript-React, a little bit of
                        Bootstrap, and the <a href="https://openweathermap.org/" target="_blank" rel="noreferrer">Open Weather Map API</a>. </p>
                    <div style={{ maxWidth: "500px" }} >
                        <Image src={jsLogo} style={{ width: "100px" }} />
                        <Image src={rLogo} style={{ width: "100px" }} />
                        <Image src={openWeatherLogo} style={{ width: "100px" }} />
                    </div>
                    <h2 className={h2Class} style={h2Style}> Finding an API Almost Ended the Project</h2>
                    <p className={pClass} style={pStyle}>
                        One of the initial issues I ran into was selecting an API for my project. I needed an API that would
                        allow me to fetch a year of historical weather data for the location the user searches. Most APIs I
                        looked into would only allow for a few days of historical weather data and a few days of predicted weather data.
                        I found one API - Open Weather Map that allows for fetching of historical weather data, and there was a free version
                        where you could get 1000 “records” a day, and anything more than that was expensive. I thought that this would be the perfect API for the project,
                        1000 searches a day is plenty for a small project, at least to start. Turns out I did not understand how API’s work. Fetching a year
                        of weather data was 365 records. I even narrowed down the API call paramerters to call only as much information as was necessary
                        for the project. This was not enough data to even test the web application. There were a couple of days working on the project where I would have to stop working
                        to wait for the record allowance to reset.</p>
                    <p className={pClass} style={pStyle}>
                        This limit was not going work so my solution was to email the API and ask for a bigger allowance. They let me know that
                        since I was a student I could get a free upgrade. This upgraded allowance is what made this project possible. This also
                        reminded me that programming is not an individualistic task and is interdisciplinary in nature, often the best way to get something
                        done is to ask for help.
                    </p>
                    <h2 className={h2Class} style={h2Style}> Next Steps</h2>
                    <p className={pClass} style={pStyle}>
                        I enjoyed this project a lot, and learned a lot from it. I was exposed to a lot of new tools, and while they did not all
                        have a space in this project, I would like to implement them in a different project. For example, in this project, I was
                        mainly dealing with fetching data, and manipulating it to display different things to the user. I was fetching data from
                        an API, but I did not do anything to store data, or manage user data. This project did not allow me to explore information
                        architecture very much, so I would like to create a site where there is more for the user to interact with. I want to challenge
                        myself to code a more complex project and organize the information for the user. For my next project I want to get into
                        user-authentication, as well as storing and managing user data. </p>

                    <div style={{ minHeight: "80px" }}></div>
                </div>
            </div >
            <ProjectCards slug="temperature-blanket" />
        </div>
    )
}
