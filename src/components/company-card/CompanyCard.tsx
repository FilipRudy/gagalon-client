import React from "react";
import "../company-card/company-card.css";

interface InfoCardProps {
    title: string;
    description: string;
}

export const CompanyCard = (props: InfoCardProps) => {
    return (
        <div className="company-card">
            <div className="company-card-title jetbrains-mono">
                <p style={{textAlign: "center", margin: 0, fontSize: 25}}>{props.title}</p>
            </div>
            <div className="company-card-message jetbrains-mono">
                <p>{props.description}</p>
            </div>
        </div>
    );
}
