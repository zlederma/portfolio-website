import background from '../assets/home-background-3.png'
import './WelcomeStyles.css'


export default function Welcome() {
    return (

        <div className='welcome__container'>
            <div style={{ position: "sticky", top: "100px" }}>
                <div className="mx-4" style={{ border: "2px solid rgba(0,0,0,0)" }}>
                    <h1 className="Hello" style={{ fontFamily: "Roboto", fontSize: "60px", fontWeight: "900", letterSpacing: "0px", lineHeight: "60px" }}> Hi It's Zoe,</h1>
                    <h2 className=" mb-5 Intro" style={{ fontSize: "20px", color: "rgba(0,0,0,..6)" }}> I'm a frontend developer and <br /> UI fanatic
                        fully focused on <br />fabricating the  finest experience</h2>
                </div>
            </div>
        </div >

    )
}
