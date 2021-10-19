import React from 'react'
import background from '../assets/Home-Background.png'

export default function Welcome() {
    return (

        <div style={{
            minWidth: "100vw",
            height: "90vh",
            backgroundImage: `url(${background})`,
            backgroundPosition: 'right top',
            backgroundSize: "contain",
            backgroundAttachment: "fixed",
            // backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
        }}>

            <div style={{ position: "sticky", top: "100px" }}>
                <div style={{}}>
                    <h1 className="Hello" style={{ fontFamily: "Sans Serif" }}> Hi It's Zoe,</h1>
                    <h2 className=" mb-5 Intro"> I'm a frontend developer <br /> and UI fanatic
                        fully focused <br /> on fabricating the  finest experience</h2>
                </div>
            </div>
        </div >

    )
}
