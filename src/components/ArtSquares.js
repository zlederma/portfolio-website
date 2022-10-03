import './ArtSquaresStyles.css'
import ArtSquare from './ArtSquare'
import React from 'react'

const showSquares = () => {
    let squares = [];
    for (let i = 0; i < 260; i++) {
        squares.push(<ArtSquare />)
    }
    return squares;
}
export default function ArtSquares() {
    return (
        <div className='art-squares__container'>
            {showSquares()}
        </div>
    )

}
