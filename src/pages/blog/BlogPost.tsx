import React from 'react';
import { useParams } from 'react-router-dom';
import "../blog/blog.css";
import { articles } from "./articles";

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

            <div className="about-us-product-section work-sans">
                <div className="about-us-text-content about-us-content-border">
                    <p className="about-us-paragraph font-unbolded">
                        {formattedContent}
                    </p>
                </div>
                <div className="about-us-image-content">
                    <img className="about-us-image" src={article.image} alt="About Us" />
                </div>
            </div>

        </div>
    );
};
