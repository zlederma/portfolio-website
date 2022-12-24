import DetailedProjectCard from "./DetailedProjectCard";
import "../styles/DetailedProjectCardsStyles.css"

export default function DetailedProjectCards({ titles }) {
    function showCards() {
        const cards = [];
        for (let i = 0; i < titles.length; i++) {
            cards.push(<li><DetailedProjectCard title={titles[i]} /></li>);
        }
        return cards;
    }
    return (
        <ul className="detailed-project-cards__container">
            {showCards()}
            {/* {
                data.map((card, id) => { <DetailedProjectCard card={card} key={id++} /> }
                )
            } */}
        </ul>
    )
}
