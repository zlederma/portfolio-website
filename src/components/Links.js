import { useState } from "react";
import { FaLinkedin, FaGithub, } from "react-icons/fa";
import { IoDocumentTextSharp, IoMailSharp } from "react-icons/io5";
import resume from '../assets/Resume-Zoe-Lederman.pdf';
import "../styles/LinksStyles.css"


//TODO: make this code more reusable
export default function Links() {
    const white = "rgba(255, 250, 241, 1)"
    const green = "#008c6a";
    const orange = "#c5462c";
    const purple = "#9b4acf";

    const [firstIcon, setFirstIcon] = useState(white);
    const [secondIcon, setSecondIcon] = useState(white);
    const [thirdIcon, setThirdIcon] = useState(white);

    let firstIconTimeOutId = 0;
    let secondIconTimeOutId = 0;
    let thirdIconTimeOutId = 0;


    const handleFirstMouseOver = () => {
        setFirstIcon(green)
        clearTimeout(firstIconTimeOutId)
    };
    const handleSecondMouseOver = () => {
        setSecondIcon(orange)
        clearTimeout(secondIconTimeOutId)
    };
    const handleThirdMouseOver = () => {
        setThirdIcon(purple)
        clearTimeout(thirdIconTimeOutId)
    };

    const handleFirstMouseLeave = () => {
        firstIconTimeOutId = setTimeout(() => {
            setFirstIcon(white)
        }, 200); // delay the color turning back to its default state
    };

    const handleSecondMouseLeave = () => {
        secondIconTimeOutId = setTimeout(() => {
            setSecondIcon(white)
        }, 200); // delay the color turning back to its default state
    };

    const handleThirdMouseLeave = () => {
        thirdIconTimeOutId = setTimeout(() => {
            setThirdIcon(white)
        }, 200); // delay the color turning back to its default state
    };

    const handleFirstMouseDown = () => {
        firstIconTimeOutId = setTimeout(() => {
            setFirstIcon(white)
        }, 150);
    }
    const handleSecondMouseDown = () => {
        secondIconTimeOutId = setTimeout(() => {
            setSecondIcon(white)
        }, 150);
    }

    const handleThirdMouseDown = () => {
        thirdIconTimeOutId = setTimeout(() => {
            setThirdIcon(white)
        }, 150);
    }
    return (
        <div className="links__wrapper">
            <nav className="landing__links">
                <a
                    href="https://www.linkedin.com/in/zoe-lederman"
                    target="_blank"
                    rel="noreferrer"
                    style={{ color: firstIcon }}
                    onMouseOver={handleFirstMouseOver}
                    onMouseLeave={handleFirstMouseLeave}
                    onMouseDown={handleFirstMouseDown}
                >
                    <FaLinkedin className="icon" />
                </a>
                <a
                    href="https://www.github.com/zlederma"
                    target="_blank"
                    rel="noreferrer"
                    style={{ color: secondIcon }}
                    onMouseOver={handleSecondMouseOver}
                    onMouseLeave={handleSecondMouseLeave}
                    onMouseDown={handleSecondMouseDown}
                >
                    <FaGithub className="icon" />
                </a>
                <a
                    href={resume}
                    target="_blank"
                    rel="noreferrer"
                    style={{ color: thirdIcon }}
                    onMouseOver={handleThirdMouseOver}
                    onMouseLeave={handleThirdMouseLeave}
                    onMouseDown={handleThirdMouseDown}
                >
                    <IoDocumentTextSharp className="icon" />
                </a>
            </nav>
        </div>
    )
}
