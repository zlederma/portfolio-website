import '../styles/ArtSquaresStyles.css'
import ArtSquare from './ArtSquare'
export default function ArtSquares() {
    const showSquares = () => {
        let bracket = 0;
        let squares = []
        for (let i = 0; i < 15; i++) {
            squares.push(<ArtSquare bracket={bracket} />);
            bracket++;
            if (bracket > 2) {
                bracket = 0;
            }

        }
        return squares
    }
    return (
        <div className="art-squares__container">
            {showSquares()}
        </div>
    )
}