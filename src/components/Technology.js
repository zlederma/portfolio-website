import "../styles/TechnologyStyles.css"
export default function Technology(props) {
    const technology = props.data ? props.data.technology : "";
    const image = props.data ? props.data.image : "";
    const link = props.data ? props.data.link : "";

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
