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
                        Jesteśmy dynamicznie rozwijającą się siecią sklepów monopolowych, oferującą szeroki asortyment
                        alkoholi, napojów oraz przekąsek. Nasze sklepy są doskonale zaopatrzone, aby sprostać
                        oczekiwaniom nawet najbardziej wymagających klientów. Dzięki profesjonalnej obsłudze i starannie
                        wyselekcjonowanym produktom, gwarantujemy wyjątkowe doświadczenia zakupowe. Działamy w wielu
                        lokalizacjach, co pozwala nam być blisko naszych klientów i dostarczać im najwyższej jakości
                        produkty na każdą okazję.
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
                    description="Wybór alkoholi z różnych zakątków świata, od lokalnych specjałów po rzadkie, kolekcjonerskie edycje. Każdy znajdzie coś dla siebie, od klasycznych trunków po ekskluzywne nowości, które gwarantują niezapomniane doznania smakowe."
                />
                <CompanyCard
                    title="Wykwalifikowany personel"
                    description="Nasz personel posiada głęboką wiedzę o naszych produktach, jest zawsze gotowy, by doradzić i polecić idealny produkt na każdą okazję. Niezależnie od okazji, możesz zawsze liczyć na profesjonalną pomoc."
                />
                <CompanyCard
                    title="Wiele lokalizacji"
                    description="Dzięki szerokiej sieci sklepów, dostęp do ulubionych produktów jest łatwiejszy niż kiedykolwiek. Niezależnie od miejsca, zawsze zapewniamy ten sam wysoki standard obsługi i jakości, abyś mógł cieszyć się najlepszymi produktami w dogodnej lokalizacji."
                />
            </div>
        </div>
    );
}