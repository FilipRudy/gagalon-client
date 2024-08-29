import React, { useEffect } from 'react';
import '../current-promotions/current-promotions.css';
import { TransformWrapper, TransformComponent, ReactZoomPanPinchContentRef } from 'react-zoom-pan-pinch';
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
            <Carousel
                indicators={false}
                nextLabel=""
                prevLabel=""
                style={{ width: '100%', height: 'auto' }}
                className="promo-carousel"
            >
                {promoImages.map((image, index) => (
                    <Carousel.Item key={index}>
                        <TransformWrapper
                            initialScale={1}
                            initialPositionX={0}
                            initialPositionY={0}
                        >
                            {({ zoomIn, zoomOut, resetTransform }) => (
                                <>
                                    <TransformComponent>
                                        <img
                                            className="d-block w-100 rounded promo-image"
                                            src={image}
                                            alt={`Promotion ${index + 1}`}
                                        />
                                    </TransformComponent>
                                    <div className="zoom-controls">
                                        <button className="zoom-button" onClick={() => zoomIn()}>+</button>
                                        <button className="zoom-button" onClick={() => zoomOut()}>-</button>
                                        <button className="zoom-button" onClick={() => resetTransform()}>Reset</button>
                                    </div>
                                </>
                            )}
                        </TransformWrapper>

                    </Carousel.Item>
                ))}
            </Carousel>
        </div>
    );
};
