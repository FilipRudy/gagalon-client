import React, { useEffect } from 'react';
import '../current-promotions/current-promotions.css';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';
import { Carousel } from 'react-bootstrap';

export const CurrentPromotions: React.FC = () => {
    const promoImages = ["https://gagalon-images.s3.eu-north-1.amazonaws.com/current-promotions/promo1.webp",
        "https://gagalon-images.s3.eu-north-1.amazonaws.com/current-promotions/promo2.webp",
        "https://gagalon-images.s3.eu-north-1.amazonaws.com/current-promotions/promo10.webp",
        "https://gagalon-images.s3.eu-north-1.amazonaws.com/current-promotions/promo11.webp",
        "https://gagalon-images.s3.eu-north-1.amazonaws.com/current-promotions/promo12.webp",
        "https://gagalon-images.s3.eu-north-1.amazonaws.com/current-promotions/promo13.webp",
        "https://gagalon-images.s3.eu-north-1.amazonaws.com/current-promotions/promo14.webp",
        "https://gagalon-images.s3.eu-north-1.amazonaws.com/current-promotions/promo15.webp",
        "https://gagalon-images.s3.eu-north-1.amazonaws.com/current-promotions/promo16.webp",
        "https://gagalon-images.s3.eu-north-1.amazonaws.com/current-promotions/promo17.webp",
        "https://gagalon-images.s3.eu-north-1.amazonaws.com/current-promotions/promo18.webp",
        "https://gagalon-images.s3.eu-north-1.amazonaws.com/current-promotions/promo19.webp",

    ];

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
