import React, { useState, useEffect, useRef } from 'react';
import '../locations/locations.css';

interface Location {
    id: number;
    name: string;
    lat: number;
    lng: number;
}

const locations: Location[] = [
    { id: 1, name: 'Mikołów 43-190 ul. Słoneczna 41', lat: 50.160428519976925, lng: 18.91114192023876 },
    { id: 2, name: 'Mikołów 43-190 ul. Konstytucji 3 Maja 15', lat: 50.16728482987692, lng: 18.901447064417916 },
    { id: 3, name: 'Zabrze-Pawłów 41-806 ul Sikorskiego 59a', lat: 50.280965211445945, lng: 18.81743984181863 },
    { id: 4, name: 'Katowice-Kostuchna 40-750 ul. Szarych Szeregów 28', lat: 50.19366479425307, lng: 18.988574355306994 },
    { id: 5, name: 'Łaziska Górne 43-170 ul. Orzeska 9', lat: 50.149194770792676, lng: 18.83732318414053 },
    { id: 6, name: 'Ruda Śląska-Kochłowice 41-707 ul. Oświęcimska 126', lat: 50.253391131159844, lng: 18.904512912981495 },
    { id: 7, name: 'Tychy-Czułów 43-100 ul. Katowicka 110', lat: 50.146560655864164, lng: 19.00056437791043 },
    { id: 8, name: 'Lędziny, 43-143 ul. Hołdunowska 61', lat: 50.15109596770518, lng: 19.133988082289928 },
];

export const Locations: React.FC = () => {
    const [selectedLocation, setSelectedLocation] = useState<Location | null>(null);
    const mapContainerRef = useRef<HTMLDivElement>(null);
    const mapRef = useRef<google.maps.Map | null>(null);
    const markersRef = useRef<google.maps.Marker[]>([]);

    useEffect(() => {
        (window as any).initMap = () => {
            if (mapContainerRef.current && window.google) {
                mapRef.current = new window.google.maps.Map(mapContainerRef.current, {
                    center: { lat: 50.160428519976925, lng: 18.91114192023876 },
                    zoom: 12,
                });

                markersRef.current = locations.map((location) => {
                    return new window.google.maps.Marker({
                        position: { lat: location.lat, lng: location.lng },
                        map: mapRef.current,
                        title: location.name,
                    });
                });
            }
        };

        const script = document.createElement('script');
        script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyDGrrjKgbYNvzIaS7h8x6mXC-Crtf-3qqE&callback=initMap`;
        script.async = true;
        document.head.appendChild(script);

        return () => {
            if (script.parentNode) {
                script.parentNode.removeChild(script);
            }
        };
    }, []);

    useEffect(() => {
        if (selectedLocation && mapRef.current) {
            mapRef.current.setCenter({ lat: selectedLocation.lat, lng: selectedLocation.lng });
            mapRef.current.setZoom(15);
        }
    }, [selectedLocation]);

    const handleLocationSelect = (location: Location) => {
        setSelectedLocation(location);
    };

    return (
        <div className="map-with-sidebar">
            <div className="map-card" ref={mapContainerRef}></div>
            <div className="sidebar jetbrains-mono">
                <h2>Lokalizacje</h2>
                <ul>
                    {locations.map((location) => (
                        <li
                            key={location.id}
                            onClick={() => handleLocationSelect(location)}
                            className={selectedLocation?.id === location.id ? 'selected' : ''}
                        >
                            {location.name}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};
