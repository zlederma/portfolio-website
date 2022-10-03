import './ArtSquaresStyles.css'
import ArtSquare from './ArtSquare'
export default function ArtSquares() {
    const showSquare = () => {
        return <ArtSquare />
    }
    const showSquares = () => {
        let squares = []
        for (let i = 0; i < 10; i++) {
            squares.push(showSquare());
        }
        return squares
    }
    return (
        <div className="art-squares__container">
            {showSquares()}
        </div>
    )
}