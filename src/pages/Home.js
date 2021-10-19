import React from 'react'
import Welcome from '../components/Welcome'
import ProjectCards from '../components/ProjectCards'
import AboutMe from '../components/AboutMe'

export default function Home() {
    return (
        <div>
            <Welcome></Welcome>
            <ProjectCards></ProjectCards>
            <AboutMe></AboutMe>
        </div>
    )
}
