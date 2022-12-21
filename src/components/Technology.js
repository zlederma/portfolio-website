import "../styles/TechnologyStyles.css"
export default function Technology({ data }) {
    const technology = data ? data.technology : "";
    const image = data ? data.image : "";
    const link = data ? data.link : "";

    //if there is a link there is a button
    if (link !== "") {
        return (
            <a href={link} target="blank" className="technology__button-container">
                <img className='technology__image' src={image} />
                <div className='technology__title'> {technology}</div>
            </a>
        )
    }
    else {
        return (
            <div className="technology__container">
                <img className='technology__image' src={image} />
                <div className='technology__title'> {technology} </div>
            </div>
        )
    }
}
