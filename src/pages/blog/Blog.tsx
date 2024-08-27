import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { articles } from './articles';
import "../blog/blog.css";

export const Blog = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const articlesPerPage = 5;

    const indexOfLastArticle = currentPage * articlesPerPage;
    const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
    const currentArticles = articles.slice(indexOfFirstArticle, indexOfLastArticle);

    const paginate = (pageNumber: number) => {
        setCurrentPage(0);
        setTimeout(() => {
            setCurrentPage(pageNumber);
            window.scrollTo(0, 0);
        }, 0);
    };

    return (
        <div className="blog-container">
            <h1 className="blog-title clash-font">Nasze ostatnie artykuły</h1>
            <div className="blog-articles">
                {currentArticles.map(article => (
                    <div key={article.id} className="blog-article clash-font">
                        <h2>{article.title}</h2>
                        <p className="jetbrains-mono">{article.summary}</p>
                        <Link to={`/artykul/${article.id}`} className="read-more">Przeczytaj</Link>
                    </div>
                ))}
            </div>
            <div className="blog-pagination">
                {Array.from({ length: Math.ceil(articles.length / articlesPerPage) }, (_, i) => (
                    <button
                        key={i + 1}
                        onClick={() => paginate(i + 1)}
                        className={currentPage === i + 1 ? 'active' : ''}
                    >
                        {i + 1}
                    </button>
                ))}
            </div>
        </div>
    );
};
