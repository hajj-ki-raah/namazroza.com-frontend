import React from "react";
import { Link } from "react-router-dom";

const ArticleCard = ({
  id,
  title,
  description,
  author,
  category,
  published,
}) => {
  return (
    <Link to={`/articles/${id}`} className="article-card">
      <h3>{title}</h3>
      <p>{description}</p>
      <div className="article-details">
        <span>Published: {published}</span>
        <span>Category: {category}</span>
        <span>Author: {author}</span>
      </div>
    </Link>
  );
};

export default ArticleCard;
