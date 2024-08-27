import React, { useEffect } from 'react';
import '../current-promotions/current-promotions.css';
import { Carousel } from 'react-bootstrap';

import promoImage1 from './img1.png';
import promoImage2 from './img2.png';
import promoImage3 from './img3.png';
import promoImage4 from './img4.png';

export const CurrentPromotions: React.FC = () => {
    const promoImages = [promoImage1, promoImage2, promoImage3, promoImage4];

    useEffect(() => {
        const promoContainer = document.querySelector('.promo-carousel-container');
        if (promoContainer) {
            promoContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }, []);

    return (
        <div className="promo-carousel-container">
            <Carousel indicators style={{ width: '100%', height: 'auto' }}>
                {promoImages.map((image, index) => (
                    <Carousel.Item key={index}>
                        <img
                            className="d-block w-100 rounded"
                            src={image}
                            alt={`Promotion ${index + 1}`}
                            style={{ objectFit: 'cover', borderRadius: '10px' }}
                        />
                    </Carousel.Item>
                ))}
            </Carousel>
        </div>
    );
};
