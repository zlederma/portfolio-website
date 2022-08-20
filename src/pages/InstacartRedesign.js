import React from 'react';
import ProjectCards from '../components/ProjectCards';
import { CaseStudyComponent } from '../utils/CaseStudyComponent';
import "./CaseStudyStyles.css";


export default function InstacartRedesign() {
    return (
        <div>
            <div className="body">
                <div className="mx-4 container">
                    <div style={{ minHeight: "100px" }}></div>
                    <CaseStudyComponent />
                    <div style={{ minHeight: "80px" }}></div>
                    <p
                        className="mb-4 paragraph">
                    </p>
                </div>
            </div>
            <ProjectCards />
        </div>
    )
}
