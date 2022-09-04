import React from 'react'
import Welcome from '../components/Welcome'
import ProjectCards from '../components/ProjectCards'
import AboutMe from '../components/AboutMe'


export default function Home() {
    return (
        <div>

            <div style={{ display: "flex", justifyContent: "center" }}>
                <div style={{ maxWidth: "1100px" }}>
                    <Welcome></Welcome>
                </div>
            </div>


            <ProjectCards slug="master" />
            <AboutMe></AboutMe>
        </div>
    )
}
