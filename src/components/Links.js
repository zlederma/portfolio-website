import { FaLinkedin, FaGithub, } from "react-icons/fa";
import { IoDocumentTextSharp } from "react-icons/io5";
import resume from '../assets/Resume-Zoe-Lederman.pdf';
import "../styles/LinksStyles.css"
export default function Links() {
    return (
        <div className="links__wrapper">
            <nav className="landing__links">
                <a
                    href="https://www.linkedin.com/in/zoe-lederman"
                    target="_blank"
                    rel="noreferrer" >
                    <FaLinkedin className="icon" />
                </a>
                <a
                    href="https://www.github.com/zlederma"
                    target="_blank"
                    rel="noreferrer" >
                    <FaGithub className="icon" />
                </a>
                <a
                    href={resume}
                    target="_blank"
                    rel="noreferrer" >
                    <IoDocumentTextSharp className="icon" />
                </a>
            </nav>
        </div>
    )
}
