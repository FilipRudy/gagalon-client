import React from 'react';
import { useParams } from 'react-router-dom';
import "../blog/blog.css";
import {articles} from "./articles";

export const BlogPost = () => {
    const { id } = useParams<{ id: string }>();

    const article = articles.find(article => article.id === parseInt(id!));


    if (!article) {
        return <div>Article not found</div>;
    }

    return (
        <div className="article-page">
            <h1>{article.title}</h1>
            <p>{article.content}</p>
        </div>
    );
};
