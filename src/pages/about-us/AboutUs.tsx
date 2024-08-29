import React from 'react';
import "../about-us/about-us.css";
import sampleImage from '../about-us/2024-02-07.png';
import {CompanyCard} from "../../components/company-card/CompanyCard";


export const AboutUs = () => {
    return (
        <div className="about-us-container">
            <h2 className="about-us-section-title clash-font">Kim Jesteśmy</h2>

            <div className="about-us-product-section work-sans">
                <div className="about-us-text-content">
                    <p className="about-us-paragraph jetbrains-mono">
                        Nasza firma funkcjonuje na rynku od 21 lat i obecnie prowadzi 8 placówek handlowych. Specjalizujemy się w szerokim asortymencie, obejmującym alkohol, wino, piwo, a także napoje, słodycze i przekąski. Stawiamy na efektywne zarządzanie zaopatrzeniem, aby w pełni zaspokajać potrzeby naszych klientów i utrzymywać wysoki standard obsługi w każdym z naszych sklepów.
                    </p>

                </div>
                <div className="about-us-image-content">
                    <img className="about-us-image" src={sampleImage} alt="About Us"/>
                </div>
            </div>

            <div className="section-break"></div>
            <h2 className="about-us-section-title clash-font">Co Nas Cechuje</h2>

            <div className="about-us-info-cards-section">
                <CompanyCard
                    title="Szeroki asortyment"
                    description="Oferujemy alkohole z różnych zakątków świata. Znajdziesz u nas zarówno klasyczne trunki, jak i nowe, interesujące opcje."
                />
                <CompanyCard
                    title="Wykwalifikowany personel"
                    description="Nasz personel dobrze zna naszą ofertę i chętnie pomoże w wyborze odpowiedniego produktu na każdą okazję."
                />
                <CompanyCard
                    title="Wiele lokalizacji"
                    description="Dzięki wielu sklepom masz łatwy dostęp do ulubionych produktów. Zapewniamy spójną jakość i obsługę w każdej lokalizacji."
                />

            </div>
        </div>
    );
}