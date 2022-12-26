import '../styles/ProjectsStyles.css'
import { useState } from 'react';
export default function Projects() {
    const [topBorder, setTopBorder] = useState("#fffaf1")
    const [leftBorder, setLeftBorder] = useState("#fffaf1")
    const handleMouseOver = () => {
        setTopBorder("#008c6a")
        setLeftBorder("#c5462c");
    };

    const handleMouseLeave = () => {
        setTimeout(() => {
            setTopBorder("#fffaf1")
            setLeftBorder("#fffaf1");
        }, 300); // delay the color turning back to its default state
    };

    return (
        <div className='projects__container'>
            <h1 className='projects__title'>
                Projects</h1>
            <ul >
                <a href="">Clipboard</a>
                <a href="">Book App</a>
                <a href="">Portfolio-ception</a>
            </ul>
            <div className='projects__links-decor-top'
                style={{
                    borderTop: `3px solid ${topBorder}`,
                }}
                onMouseOver={handleMouseOver}
                onMouseLeave={handleMouseLeave}>
            </div>
            <div className='projects__links-decor-left'
                style={{
                    borderLeft: `3px solid ${leftBorder}`
                }}
                onMouseOver={handleMouseOver}
                onMouseLeave={handleMouseLeave}>
            </div>
        </div>
    )
}
