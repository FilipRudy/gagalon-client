import React from "react";
import "../company-card/company-card.css";


interface InfoCardProps {
    title: string;
    description: string;
}

export const  CompanyCard = (props: InfoCardProps) => {
        return (
            <div className="info-card">
                <div className={"info-card-title jetbrains-mono"}>
                    <p style={{textAlign: "center", margin: 0, fontSize: 25}}>{props.title}</p>
                </div>
                <div className={"info-card-message jetbrains-mono"}>
                    <p style={{ textAlign: "center", margin: 10 }}>{props.description}</p>
                </div>
            </div>
        );

}
