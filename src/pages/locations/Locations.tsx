import React, { useState, useEffect, useRef } from 'react';
import '../locations/locations.css';
import shop from "../about-us/2024-02-07.png";

interface Location {
    id: number;
    name: string;
    lat: number;
    lng: number;
    image: string;
}

const locations: Location[] = [
    {
        id: 1,
        name: 'Mikołów 43-190 ul. Słoneczna 41',
        lat: 50.160428519976925,
        lng: 18.91114192023876,
        image: shop,
    },
    {
        id: 2,
        name: 'Mikołów 43-190 ul. Konstytucji 3 Maja 15',
        lat: 50.16728482987692,
        lng: 18.901447064417916,
        image: shop,
    },
    {
        id: 3,
        name: 'Zabrze-Pawłów 41-806 ul Sikorskiego 59a',
        lat: 50.280965211445945,
        lng: 18.81743984181863,
        image: shop,
    },
    {
        id: 4,
        name: 'Katowice-Kostuchna 40-750 ul. Szarych Szeregów 28',
        lat: 50.19366479425307,
        lng: 18.988574355306994,
        image: shop,
    },
    {
        id: 5,
        name: 'Łaziska Górne 43-170 ul. Orzeska 9',
        lat: 50.149194770792676,
        lng: 18.83732318414053,
        image: shop,
    },
    {
        id: 6,
        name: 'Ruda Śląska-Kochłowice 41-707 ul. Oświęcimska 126',
        lat: 50.253391131159844,
        lng: 18.904512912981495,
        image: shop,
    },
    {
        id: 7,
        name: 'Tychy-Czułów 43-100 ul. Katowicka 110',
        lat: 50.146560655864164,
        lng: 19.00056437791043,
        image: shop,
    },
    {
        id: 8,
        name: 'Lędziny, 43-143 ul. Hołdunowska 61',
        lat: 50.15109596770518,
        lng: 19.133988082289928,
        image: shop,
    },
];

export const Locations: React.FC = () => {
    const [selectedLocation, setSelectedLocation] = useState<Location | null>(null);
    const mapContainerRef = useRef<HTMLDivElement>(null);
    const mapRef = useRef<google.maps.Map | null>(null);
    const markersRef = useRef<google.maps.Marker[]>([]);
    const infoWindowRef = useRef<google.maps.InfoWindow | null>(null);

    useEffect(() => {
        (window as any).initMap = () => {
            if (mapContainerRef.current && window.google) {
                mapRef.current = new window.google.maps.Map(mapContainerRef.current, {
                    center: { lat: 50.160428519976925, lng: 18.91114192023876 },
                    zoom: 12,
                });

                infoWindowRef.current = new window.google.maps.InfoWindow();

                markersRef.current = locations.map((location) => {
                    const marker = new window.google.maps.Marker({
                        position: { lat: location.lat, lng: location.lng },
                        map: mapRef.current,
                        title: location.name,
                    });

                    marker.addListener('click', () => {
                        setSelectedLocation(location); // Update state to trigger info window
                    });

                    return marker;
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
        if (selectedLocation && mapRef.current && infoWindowRef.current) {
            const selectedMarker = markersRef.current.find(
                (marker) =>
                    marker.getPosition()?.lat() === selectedLocation.lat &&
                    marker.getPosition()?.lng() === selectedLocation.lng
            );

            if (selectedMarker) {
                mapRef.current.setCenter({
                    lat: selectedLocation.lat,
                    lng: selectedLocation.lng,
                });
                mapRef.current.setZoom(15);

                infoWindowRef.current.setContent(`
                    <div class="info-window-content">
                        <img src="${selectedLocation.image}" alt="${selectedLocation.name}" class="info-window-image" />
                    </div>
                `);

                infoWindowRef.current.open(mapRef.current, selectedMarker);
            }
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