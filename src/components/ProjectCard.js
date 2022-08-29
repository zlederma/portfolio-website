import { Card } from "react-bootstrap";
import React from 'react';
export default function ProjectCard({ link, title, image }) {
    return (
        <Card className="" style={{ height: "300px", boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px" }}>
            {/* makes the entire card clickable */}
            <a href={link} className="stretched-link"></a>
            <Card.Body>
                <Card.Title
                    className="my-2"
                    style={{ textAlign: "center" }}>
                    {title}
                </Card.Title>
                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-around"
                    }}>
                    <Card.Img
                        className="mt-4"
                        style={{ maxWidth: "150px", maxHeight: "150px" }}
                        variant="top"
                        src={image} />
                </div>
            </Card.Body>
        </Card>
    )
}