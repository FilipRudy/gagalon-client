import React from 'react';
import { useParams } from 'react-router-dom';
import "../blog/blog.css";
import { articles } from "./articles";
import sampleImage from "../about-us/2024-02-07.png";
import {CompanyCard} from "../../components/company-card/CompanyCard";

export const BlogPost = () => {
    const { id } = useParams<{ id: string }>();
    const article = articles.find(article => article.id === parseInt(id!));

    if (!article) {
        return <div>Article not found</div>;
    }

    return (
        <div className="about-us-container">
            <h2 className="about-us-section-title font-bolded">{article.title}</h2>

            <div className="about-us-product-section work-sans">
                <div className="about-us-text-content">
                    <p className="about-us-paragraph font-unbolded">
                        {article.content}
                    </p>

                </div>
                <div className="about-us-image-content">
                    <img className="about-us-image" src={article.image} alt="About Us"/>
                </div>
            </div>

        </div>
    );
};
