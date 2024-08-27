import "../contact/contact-info.css";

export const ContactInfo = () => {
    return (
        <div className="contact-info-wrapper">
            <div className="contact-info-container">

                <div className="contact-info-card">
                    <h1 className="clash-font">Kontakt ze sklepami</h1>
                    <p className="jetbrains-mono">
                        <strong>1. Mikołów 43-190, ul. Słoneczna 41</strong><br />
                        <strong><a href="tel:+48327382859">+48 32 738 28 59</a></strong>,<br />
                        <strong><a href="tel:+48510923961">+48 510 923 961</a></strong>
                    </p>
                    <p className="jetbrains-mono">
                        <strong>2. Mikołów 43-190, ul. Konstytucji 3 Maja 15</strong><br />
                        <strong><a href="tel:+48327382825">+48 32 738 28 25</a></strong>
                    </p>
                    <p className="jetbrains-mono">
                        <strong>3. Zabrze-Pawłów 41-806, ul. Sikorskiego 59a</strong><br />
                        <strong><a href="tel:+48322710689">+48 32 271 06 89</a></strong>
                    </p>
                    <p className="jetbrains-mono">
                        <strong>4. Katowice-Kostuchna 40-750, ul. Szarych Szeregów 28</strong><br />
                        <strong><a href="tel:+48322048745">+48 32 204 87 45</a></strong>
                    </p>
                    <p className="jetbrains-mono">
                        <strong>5. Łaziska Górne 43-170, ul. Orzeska 9</strong><br />
                        <strong><a href="tel:+48323227453">+48 32 322 74 53</a></strong>
                    </p>
                    <p className="jetbrains-mono">
                        <strong>6. Ruda Śląska-Kochłowice 41-707, ul. Oświęcimska 126</strong><br />
                        <strong><a href="tel:+48323407599">+48 32 340 75 99</a></strong>
                    </p>
                    <p className="jetbrains-mono">
                        <strong>7. Tychy-Czułów 43-100, ul. Katowicka 110</strong><br />
                        <strong><a href="tel:+48322169246">+48 32 216 92 46</a></strong>
                    </p>
                    <p className="jetbrains-mono">
                        <strong>8. Lędziny 43-143, ul. Hołdunowska 61</strong><br />
                        <strong><a href="tel:+48322212044">+48 32 221 20 44</a></strong>
                    </p>
                </div>

                <div className="contact-info-card">
                    <h1 className="clash-font">Dane firmy</h1>
                    <p className="jetbrains-mono"><strong>"Gagalon" Spółka Jawna</strong></p>
                    <p className="jetbrains-mono"><strong>Bogumiła Wicherek, Zbigniew Wicherek</strong></p>
                    <p className="jetbrains-mono"><strong>40-190 Mikołów, ul. Słoneczna 41</strong></p>
                    <p className="jetbrains-mono"><strong>NIP: 6351006362</strong></p>
                    <h1 className="clash-font">Dane kontaktowe</h1>
                    <p className="jetbrains-mono">
                        <strong>Email do biura:<br/>
                            <a className="work-sans" href="mailto:gagalon@onet.pl">gagalon@onet.pl</a>
                        </strong>
                    </p>
                    <p className="jetbrains-mono">
                        <strong>Numery do biura:<br/>
                            <a href="tel:+48327382853">+48 32 738 28 53</a><br/>
                            <a href="tel:+48510923961">+48 510 923 961</a>
                        </strong>
                    </p>
                </div>

            </div>
            <div className="section-break"></div>
        </div>
    );
};
