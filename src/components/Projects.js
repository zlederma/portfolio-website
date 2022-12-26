import '../styles/ProjectsStyles.css'
import { useState } from 'react';
export default function Projects() {
    const [topBorder, setTopBorder] = useState("#fffaf1");
    const [leftBorder, setLeftBorder] = useState("#fffaf1");
    const [rightBorder, setRightBorder] = useState("#fffaf1");

    let topTimeOutId = 0;
    let leftTimeOutId = 0;
    let rightTimeOutId = 0;

    const handleTopMouseOver = () => {
        setTopBorder("#008c6a")
        clearTimeout(topTimeOutId)
    };

    const handleLeftMouseOver = () => {
        setLeftBorder("#c5462c")
        clearTimeout(leftTimeOutId)
    };
    const handleRightMouseOver = () => {
        setRightBorder("#9b4acf")
        clearTimeout(rightTimeOutId)
    };

    const handleTopMouseLeave = () => {
        topTimeOutId = setTimeout(() => {
            setTopBorder("#fffaf1")
        }, 200); // delay the color turning back to its default state
    };
    const handleLeftMouseLeave = () => {
        leftTimeOutId = setTimeout(() => {
            setLeftBorder("#fffaf1")
        }, 200);
    }
    const handleRightMouseLeave = () => {
        rightTimeOutId = setTimeout(() => {
            setRightBorder("#fffaf1")
        }, 200);
    };

    const handleTopMouseDown = () => {
        topTimeOutId = setTimeout(() => {
            setTopBorder("#fffaf1")
        }, 150);
    }
    const handleLeftMouseDown = () => {
        topTimeOutId = setTimeout(() => {
            setTopBorder("#fffaf1")
        }, 150);
    }
    const handleRightMouseDown = () => {
        topTimeOutId = setTimeout(() => {
            setTopBorder("#fffaf1")
        }, 150);
    };



    return (
        <div className='projects__container'>
            <h1 className='projects__title'>
                Projects</h1>
            <ul >
                <a href="/projects/clipboard" style={{ color: topBorder }} onMouseOver={handleTopMouseOver}
                    onMouseLeave={handleTopMouseLeave}
                    onMouseDown={handleTopMouseDown} >Clipboard</a>
                <a href="/projects/book-app" style={{ color: leftBorder }} onMouseOver={handleLeftMouseOver}
                    onMouseLeave={handleLeftMouseLeave}
                    onMouseDown={handleLeftMouseDown}>Book App</a>
                <a href="/projects/portfolioception" style={{ color: rightBorder }} onMouseOver={handleRightMouseOver}
                    onMouseLeave={handleRightMouseLeave}
                    onMouseDown={handleRightMouseDown}>Portfolio-ception</a>
            </ul>
            <a className='projects__links-decor'
                href="/projects/clipboard"
                style={{
                    width: "120px",
                    top: "-15px",
                    padding: "20px",
                    borderTop: `2px solid ${topBorder}`,
                }}
                onMouseOver={handleTopMouseOver}
                onMouseLeave={handleTopMouseLeave}
                onMouseDown={handleTopMouseDown}>
            </a>
            <a className='projects__links-decor'
                href="/projects/book-app"
                style={{
                    height: "150px",
                    padding: "20px",
                    top: "-40px",
                    left: "-20px",
                    borderLeft: `2px solid ${leftBorder}`,
                }}
                onMouseOver={handleLeftMouseOver}
                onMouseLeave={handleLeftMouseLeave}
                onMouseDown={handleLeftMouseDown}>
            </a>
            <a className='projects__links-decor'
                href="/projects/portfolioception"
                style={{
                    height: "150px",
                    padding: "20px",
                    top: "40px",
                    right: "-20px",
                    borderRight: `2px solid ${rightBorder}`,
                }}
                onMouseOver={handleRightMouseOver}
                onMouseLeave={handleRightMouseLeave}
                onMouseDown={handleRightMouseDown}>
            </a>
        </div>
    )

}
