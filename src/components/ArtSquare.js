import '../styles/ArtSquareStyles.css'
import { RiBracesFill, RiCodeFill, RiBracketsFill } from "react-icons/ri";
import { useState } from 'react';
export default function ArtSquare({ bracket }) {

    const [fill, setFill] = useState("#fffaf1")
    const handleMouseOver = () => {
        switch (bracket) {
            case 0:
                setFill("#c5462c");
                break;
            case 1:
                setFill("#008c6a");
                break;
            case 2:
                setFill("#9b4acf");
                break;
            default:
                return;
        }
    };

    const handleMouseLeave = () => {
        setTimeout(() => {
            setFill("#fffaf1");
        }, 150); // delay the color turning back to its default state
    };
    function renderBracket() {
        const className = "art-square__square";

        switch (bracket) {
            case 0:
                return <RiBracesFill
                    className={className}
                    fill={fill} onMouseOver={handleMouseOver}
                    onMouseLeave={handleMouseLeave} />
            case 1:
                return <RiCodeFill
                    className={className}
                    fill={fill} onMouseOver={handleMouseOver}
                    onMouseLeave={handleMouseLeave} />
            case 2:
                return <RiBracketsFill
                    className={className}
                    fill={fill} onMouseOver={handleMouseOver}
                    onMouseLeave={handleMouseLeave} />
            default:
                return <></>;
        }
    }
    return (
        <div className="art-square__container">
            {renderBracket()}
        </div>
    )
}
