import React from 'react';
import { useParams } from 'react-router-dom';
import "../blog/blog.css";
import { articles } from "./articles";
import {Carousel} from "react-bootstrap";

export const BlogPost = () => {
    const { id } = useParams<{ id: string }>();
    const article = articles.find(article => article.id === parseInt(id!));

    if (!article) {
        return <div>Article not found</div>;
    }

    const formattedContent = article.content.split('\n').map((line, index) => (
        <p key={index} >
            {line}
        </p>
    ));

    return (
        <div className="about-us-container">
            <h2 className="about-us-section-title font-bolded">{article.title}</h2>

            {article.layout === "photo-left" && (
                <div>
                <div className="about-us-product-section work-sans">
                    <div className="about-us-text-content about-us-content-border">
                        <p className="about-us-paragraph font-unbolded">
                            {article.firstSplit}
                        </p>
                        <div className="small-section-break"></div>

                        <p className="about-us-paragraph font-unbolded">
                            {article.secondSplit}
                        </p>
                    </div>
                    <div className="about-us-image-content">
                        <Carousel>
                            {article.imagesSplit3.map((image, index) => (
                                <Carousel.Item key={index}>
                                    <img
                                        className="d-block rounded carousel-image"
                                        src={image}
                                        alt={`Split 2 Image ${index + 1}`}
                                    />
                                </Carousel.Item>
                            ))}
                        </Carousel>                    </div>
                </div>
                <div className="about-us-product-section work-sans">

                    <div className="about-us-text-content about-us-content-border">
                        <p className="about-us-paragraph font-unbolded">
                            {article.thirdSplit}
                        </p>
                    </div>
                    <div className="about-us-image-content">
                        <div className="">
                            <Carousel>
                                {article.imagesSplit2.map((image, index) => (
                                    <Carousel.Item key={index}>
                                        <img
                                            className="d-block rounded carousel-image"
                                            src={image}
                                            alt={`Split 2 Image ${index + 1}`}
                                        />
                                    </Carousel.Item>
                                ))}
                            </Carousel>
                        </div>
                    </div>
                </div>
                    <div className="about-us-product-section work-sans">

                        <div className="about-us-text-content about-us-content-border">


                            <p className="about-us-paragraph font-unbolded">
                                {article.fourthSplit}
                            </p>
                            <div className="small-section-break"></div>
                            <p className="about-us-paragraph font-unbolded">
                                {article.fifthSplit}
                            </p>
                        </div>
                        <div className="about-us-image-content">
                            <img className="carousel-image" src={article.imagesSplit1} alt="About Us"/>
                        </div>
                    </div>
                </div>
            )}

            {article.layout === "centered-text-photo" && (
                <div className="centered-layout">
                    <div className="centered-content">
                        {formattedContent}
                    </div>
                    <img className="centered-image" src={article.imagesSplit1} alt="Article"/>
                </div>
            )}
        </div>
    );
};
