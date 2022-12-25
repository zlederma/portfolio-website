import '../styles/ArtSquareStyles.css'
import { RiBracesFill, RiCodeFill, RiBracketsFill, RiParenthesesFill } from "react-icons/ri";
import { useState } from 'react';
export default function ArtSquare({ bracket }) {

    const [fill, setFill] = useState("#fffaf1")
    const handleMouseEnter = () => {
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
        }
    };

    const handleMouseLeave = () => {
        setFill("#fffaf1");
    };
    function renderBracket() {
        const className = "art-square__square";

        switch (bracket) {
            case 0:
                return <RiBracesFill
                    className={className}
                    fill={fill} onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave} />
            case 1:
                return <RiCodeFill
                    className={className}
                    fill={fill} onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave} />
            case 2:
                return <RiBracketsFill
                    className={className}
                    fill={fill} onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave} />
            // case 3:
            //     return <RiParenthesesFill className={className} />
        }
    }
    return (
        <div className="art-square__container">
            {renderBracket()}
        </div>
    )
}
