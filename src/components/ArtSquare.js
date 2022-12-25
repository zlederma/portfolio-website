import '../styles/ArtSquareStyles.css'
import { RiBracesFill, RiCodeFill, RiBracketsFill, RiParenthesesFill } from "react-icons/ri";
export default function ArtSquare({ bracket }) {
    function renderBracket() {
        const className = "art-square__square";
        switch (bracket) {
            case 0:
                return <RiBracesFill className={className} />
            case 1:
                return <RiCodeFill className={className} />
            case 2:
                return <RiBracketsFill className={className} />
            case 3:
                return <RiParenthesesFill className={className} />
        }
    }
    return (
        <div className="art-square__container">
            {renderBracket()}
        </div>
    )
}
