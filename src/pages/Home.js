import React from 'react'
import Welcome from '../components/Welcome'
import ProjectCards from '../components/ProjectCards'
import AboutMe from '../components/AboutMe'
import Contact from "../components/Contact"

export default function Home() {
    return (
        <div>

            <div style={{ display: "flex", justifyContent: "center" }}>
                <div style={{ maxWidth: "1100px" }}>
                    <Welcome></Welcome>
                </div>
            </div>


            <ProjectCards></ProjectCards>
            <AboutMe></AboutMe>

        </div>
    )
}
