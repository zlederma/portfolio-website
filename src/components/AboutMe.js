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
export default function AboutMe() {
    return (
        <div style={{ border: "2px solid red" }}>
            <div id="About" style={{ minHeight: "50px" }}></div>
            <div className="pt-5" style={{ minHeight: "100vh" }}>
                <h1 style={mainHeadingStyle}>About Me</h1>
                <p style={paragraphStyle}> Hi, I’m Zoe. A bit about me is that I am from New Mexico, I love Rock Climbing,
                    and am a cat fanatic. I’m currently a Junior at University of California: San Diego.
                    I was originally planning on entering UI Design, however a few months ago I came to
                    the realization that I was a lot more interested in frontend development. I realized
                    I love the logic of programming more than the iterative process of design.  Once I made
                    that mental switch I committed to a Computer Science Minor and spent a lot of my freetime
                    over the summer learning CSS/HTML, Javascript, React, and Bootstrap. However, I’ve spent
                    a lot of time, classes, and projects working with the design process, so I recognize the
                    importance of good design and I would be a crucial part of the communication between the
                    design team and the development team. And if time allows, I would love to keep working on
                    my design skills.  </p>
                <h2 style={subheadingStyle}> Programming Philosophy</h2>
                <p style={paragraphStyle}>
                    When I’m working on a project it is inevitable that I will face complications, so having a process
                    to face these obstacles is pretty important. My philosophy towards programming is very circular
                    and has a lot of inputs and outputs. I am constantly learning new things, applying some of the
                    things I learned to whatever current project I’m working on, getting stuck on something else
                    (or the same thing), going back to refine my understanding of the topic or learn a new topic,
                    and on and on. I personally find this process very satisfying and it is one of the things I love
                    about programming. This circular process also allows me to constantly update my understanding of
                    a topic and get more skilled at it, while also learning new skills.
                </p>
            </div>
        </div>
    )
}
