import '../styles/ProjectsStyles.css'
import { useState, useEffect } from 'react';
export default function Projects() {

    //makes projects not visible until the animation is starting
    // const [opacity, setOpacity] = useState("0");
    // useEffect(() => {
    //     const opacityTimeOutId = setTimeout(() => { setOpacity("1") }, 1400);
    //     return () => clearTimeout(opacityTimeOutId);
    // }, [])

    const white = "rgba(255, 250, 241, .6)"
    const green = "#008c6a";
    const orange = "#c5462c";
    const purple = "#9b4acf";

    const [topBorder, setTopBorder] = useState(white);
    const [leftBorder, setLeftBorder] = useState(white);
    const [rightBorder, setRightBorder] = useState(white);

    let topTimeOutId = 0;
    let leftTimeOutId = 0;
    let rightTimeOutId = 0;


    //TODO: update to use a reducer function instead of a bunch of seperate event handlers.
    const handleTopMouseOver = () => {
        setTopBorder(green)
        clearTimeout(topTimeOutId)
    };

    const handleLeftMouseOver = () => {
        setLeftBorder(orange)
        clearTimeout(leftTimeOutId)
    };
    const handleRightMouseOver = () => {
        setRightBorder(purple)
        clearTimeout(rightTimeOutId)
    };

    const handleTopMouseLeave = () => {
        topTimeOutId = setTimeout(() => {
            setTopBorder(white)
        }, 200); // delay the color turning back to its default state
    };
    const handleLeftMouseLeave = () => {
        leftTimeOutId = setTimeout(() => {
            setLeftBorder(white)
        }, 200);
    }
    const handleRightMouseLeave = () => {
        rightTimeOutId = setTimeout(() => {
            setRightBorder(white)
        }, 200);
    };

    const handleTopMouseDown = () => {
        topTimeOutId = setTimeout(() => {
            setTopBorder(white)
        }, 150);
    }
    const handleLeftMouseDown = () => {
        topTimeOutId = setTimeout(() => {
            setLeftBorder(white)
        }, 150);
    }
    const handleRightMouseDown = () => {
        topTimeOutId = setTimeout(() => {
            setRightBorder(white)
        }, 150);
    };



    return (
        <div className='projects__container'>
            <h1 className='projects__title'>
                Projects</h1>
            <ul >
                <a href="/projects/portfolioception" style={{ color: topBorder }} onMouseOver={handleTopMouseOver}
                    onMouseLeave={handleTopMouseLeave}
                    onMouseDown={handleTopMouseDown} >Portfolioception</a>
                <a href="/projects/book-app" style={{ color: leftBorder }} onMouseOver={handleLeftMouseOver}
                    onMouseLeave={handleLeftMouseLeave}
                    onMouseDown={handleLeftMouseDown}>Book App</a>
                <a href="/projects/triton-jam" style={{ color: rightBorder }} onMouseOver={handleRightMouseOver}
                    onMouseLeave={handleRightMouseLeave}
                    onMouseDown={handleRightMouseDown}>Triton Jam</a>
            </ul>
            <a className='projects__links-decor'
                href="/projects/portfolioception"
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
                href="/projects/triton-jam"
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
