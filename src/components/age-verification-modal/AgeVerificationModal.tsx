import React from 'react';
import "../age-verification-modal/age-verification-modal.css"
import { Button } from '../button/Button';
import logo from '../age-verification-modal/gagalon-logo_plaskie.png'

interface AgeVerificationModalProps {
    onConfirm: () => void;
    onDeny: () => void;
}

export const AgeVerificationModal: React.FC<AgeVerificationModalProps> = (props) => {
    return (
        <div className="modal-overlay">
            <div className="age-verification-modal">
                <div className="modal-logo">
                    <img src={logo} alt="Logo" className="logo-image" />
                    <div className="logo-text jetbrains-mono">Witamy na naszej stronie, informujemy że zawiera ona między innymi treści o tematyce alkoholowej, przeznaczone jedynie dla osób pełnoletnich.</div>
                </div>
                <div className="age-verification-description jetbrains-mono">
                    Czy masz ukończone 18 lat?
                </div>
                <div className="age-verification-buttons">
                    <Button message="Tak" path="/" onClick={props.onConfirm} />
                    <Button message="Nie" path="" onClick={props.onDeny} />
                </div>
            </div>
        </div>
    );
};
