import React from 'react';
import './info-card.css';
import { Button } from '../button/Button';

interface InfoCardProps {
    title: string;
    description: string;
    buttonDescription: string;
    path: string;
}

export const InfoCard = (props: InfoCardProps) => {
    return (
        <div className="info-card">
            <div className="info-card-title font-bolded">{props.title}</div>
            <div className="info-card-description font-unbolded">{props.description}</div>
            <div className="info-card-button font-unbolded">
                <Button message={`${props.buttonDescription}`} path={`/${props.path}`} />
            </div>
        </div>
    );
}

