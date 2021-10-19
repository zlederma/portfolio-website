import React from 'react'

const mainHeadingStyle = {
    color: "#c5462c",
    fontWeight: "700"
}
const subheadingStyle = { color: "black" }
const paragraphStyle = {
    fontSize: "20px",
    marginBottom: "20px"
}

export default function TemperatureBlanket() {
    return (
        <div style={{ border: "2px solid red" }}>
            <div >
                <div id="About" style={{ minHeight: "100px" }}></div>
                <h1 className="project_title" style={mainHeadingStyle}> Temperature Blanket </h1>
                <h2 className="project_section" style={subheadingStyle}> Inspiration </h2>
                <p className="project_paragraph" style={paragraphStyle}> My inspiration for this project came from a tik tok trend.
                    In the trend people would crochet one line of a blanket for every day of weather data. After
                    seeing several of these videos, I thought, what if I digitalize that. Create a web application
                    where people can search a location and then a year of weather data would get output in a visual way.
                    There were just a couple of roadblocks with this idea, namely, that up to this point I had experience
                    with java, and a bit of CSS and HTML, useful languages, but definitely not the only tools necessary to
                    create this project. So my journey began....</p>
            </div>
        </div>
    )
}
