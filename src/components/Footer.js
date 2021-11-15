import React from 'react'

export default function Footer() {
    return (
        <div style={{ border: "1px solid lightgray", minWidth: "100vw", backgroundColor: "#f5eae9", display: "flex", justifyContent: "center", alignContent: "center" }}>
            <div className="mx-4" style={{ maxWidth: "1100px" }}>
                <div style={{ height: "10px" }}></div>
                <p> &copy; Zoe Lederman 2021</p>
            </div>
        </div >
    )
}
