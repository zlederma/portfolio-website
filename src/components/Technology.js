import "../styles/TechnologyStyles.css"
import { useState } from "react";
export default function Technology({ data }) {
    const technology = data ? data.technology : "";
    const image = data ? data.image : "";
    const link = data ? data.link : "";
    const modifier = (technology === "Repository") ? "repository" : "project";

    const white = "rgb(255, 250, 241, 1)"
    const green = "#008c6a";
    const orange = "#c5462c";
    const purple = "#9b4acf";
    const [firstButton, setFirstButton] = useState(white);
    const [secondButton, setSecondButton] = useState(white);


    let firstButtonTimeOutId = 0;
    let secondButtonTimeOutId = 0;


    const handleMouseOver = () => {
        if (modifier === "project") {
            setFirstButton(orange)
            clearTimeout(firstButtonTimeOutId)
        }
        else {
            setSecondButton(green)
            clearTimeout(secondButtonTimeOutId)
        }
    };

    const handleMouseLeave = () => {
        if (modifier === "project") {
            firstButtonTimeOutId = setTimeout(() => {
                setFirstButton(white)
            }, 200); // delay the color turning back to its default state
        }
        else {
            secondButtonTimeOutId = setTimeout(() => {
                setSecondButton(white)
            }, 200); // delay the color turning back to its default state
        }
    };

    const handleMouseDown = () => {
        if (modifier === "project") {
            firstButtonTimeOutId = setTimeout(() => {
                setFirstButton(white)
            }, 150);
        }
        else {
            secondButtonTimeOutId = setTimeout(() => {
                setFirstButton(white)
            }, 150);
        }
    }
    const style = (modifier === "project") ? firstButton : secondButton;

    //if there is a link there is a button
    if (link !== "") {
        return (
            <a href={link} target="blank" className="technology__button-container"
                style={{ backgroundColor: style }}
                onMouseOver={handleMouseOver}
                onMouseLeave={handleMouseLeave}
                onMouseDown={handleMouseDown} >
                <img className='technology__image' src={image} alt="" />
                <div className='technology__title'> {technology}</div>
            </a >
        )
    }
    else {
        return (
            <div className="technology__container">
                <img className='technology__image' src={image} alt="" />
                <div className='technology__title'> {technology} </div>
            </div>
        )
    }
}
