import ProjectCards from '../components/ProjectCards';
import { CaseStudyComponent } from '../utils/CaseStudyComponent';
import "./CaseStudyStyles.css";


export default function BookApp() {
    return (
        <>
            {/* <CaseStudyComponent slug="instacart" /> */}
            <ProjectCards slug="instacart" />
        </>
    )
}