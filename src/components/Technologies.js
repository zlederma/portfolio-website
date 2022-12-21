import "../styles/TechnologiesStyles.css"
import Technology from "./Technology"
export default function Technologies({ data }) {

    const showTechnologies = (data) => {
        let technologies = [];
        for (let i = 0; i < data.length; i++) {
            technologies.push(<Technology data={data[i]} />)
        }
        return technologies;
    }
    return (
        <div className="technologies__container">
            {showTechnologies(data)}
        </div>
    )
}
