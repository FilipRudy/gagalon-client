import React from 'react';
import "../age-verification-modal/age-verification-modal.css";
import { Button } from '../button/Button';
import logo from '../age-verification-modal/logo-biel-1.png';

interface AgeVerificationModalProps {
    onConfirm: () => void;
    onDeny: () => void;
}

export const AgeVerificationModal: React.FC<AgeVerificationModalProps> = (props) => {
    return (
        <div className="modal-overlay">
            <div className="age-verification-modal">
                <div className="modal-logo">
                    <img src={logo} alt="Logo" className="logo-image"/>
                    <div className="logo-text font-unbolded">Witaj na stronie sieci sklepów Gagalon</div>
                    <div className="logo-subtext font-unbolded">Strona przeznaczona tylko dla osób pełnoletnich.
                        Zawiera między innymi opisy napojów alkoholowych oferowanych przez Gagalon Sp. z o. o.
                    </div>
                </div>
                <div className="age-verification-description font-unbolded">
                    Czy masz ukończone 18 lat?
                </div>
                <div className="age-verification-buttons">
                    <Button message="Nie" path="" onClick={props.onDeny}/>
                    <Button message="Tak *" path="/" onClick={props.onConfirm}/>
                </div>
                <div className="logo-subtext-small font-unbolded">
                    * Oświadczam, że jestem osobą pełnoletnią i wyrażam zgodę na przedstawienie treści dotyczących produktów alkoholowych (W przypadku braku zgody lub braku pełnoletności, prosimy o kliknięcie "Nie")
                </div>

            </div>
        </div>
    );
};
