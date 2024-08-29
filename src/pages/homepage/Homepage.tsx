import React from "react";
import "../homepage/homepage.css";
import {InfoCard} from "../../components/info-card/InfoCard";

export const Homepage = () => {
    return (
        <div className="main-page">
            <div className="section-break"></div>
            <div className="hero-section">
                <div className="hero-content">
                    <h1 className="hero-title clash-font">
                        Twoja sieć sklepów monopolowych #1
                    </h1>
                    <p className="hero-subtitle jetbrains-mono">
                        Zanurz się w świecie wyjątkowych smaków! Gagalon to miejsce, gdzie znajdziesz starannie
                        wyselekcjonowane alkohole z całego świata – od wykwintnych win, przez aromatyczne whisky,
                        po unikalne piwa kraftowe. Zadbaj o to, by każda okazja była niezapomniana z naszymi produktami.
                        Oferujemy szeroki wybór i fachową obsługę, która pomoże Ci dokonać najlepszego wyboru.
                    </p>
                </div>
            </div>

            <div className="section-break"></div>

            <div className="why-us">
                <h1 className="clash-font text-center title">
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
