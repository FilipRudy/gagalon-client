import React from "react";
import "../homepage/homepage.css";
import {InfoCard} from "../../components/info-card/InfoCard";
import logo from "../../components/header/logo-2-cień.png";

export const Homepage = () => {
    return (
        <div className="main-page">
            <div className="section-break"></div>
            <div className="hero-section">
                <div className="hero-content"><img src={logo} alt="Gagalon" className="footer-icon"/>

                    <h1 className="hero-title font-bolded">

                        Twoja sieć sklepów monopolowych #1
                    </h1>
                    <p className="hero-subtitle font-unbolded">

                        Odkryj szeroki wybór alkoholi w naszej sieci sklepów – od win i whisky po piwa. Z nami każda
                        okazja będzie wyjątkowa. Nasz personel zawsze chętnie pomoże w wyborze odpowiednich produktów.
                    </p>
                </div>
            </div>

            <div className="section-break"></div>

            <div className="why-us">
                <h1 className="font-bolded text-center title">
                    Zainteresowany? Poznaj nasze..
                </h1>
                <div className="section-break"></div>

                <div className="info-cards work-sans">
                    <InfoCard
                        title="Najnowsze promocje!"
                        description="Oferujemy regularne akcje promocyjne na różne części naszego asortymentu – zapoznaj się z nimi w sekcji poniżej!"
                        buttonDescription="Promocje"
                        path="promocje"

                    />
                    <InfoCard
                        title="Ostatnie posty!"
                        description="Uważamy, że prowadzenie sklepu z alkoholami to coś więcej niż tylko sprzedaż – sprawdź aktualności, gdzie znajdziesz informacje i inspiracje!"
                        buttonDescription="Aktualności"
                        path="aktualnosci"
                    />
                    <InfoCard
                        title="Lokalizacje sklepów!"
                        description="Gdy zdecydujesz się na wizytę w jednym z naszych sklepów to wystarczy wejść w dział lokalizacji - znajdziesz tutaj nasze sklepy!"
                        buttonDescription="Lokalizacje"
                        path="lokalizacje"
                    />
                </div>
            </div>

            <div className="section-break"></div>
        </div>
    );
};
