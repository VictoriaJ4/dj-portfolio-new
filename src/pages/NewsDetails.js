import React from 'react'
import NewsData from './NewsData.js'
import { useParams } from 'react-router-dom';
import "./NewsDetails.css"
import { NavLink } from "react-router-dom";


const NewsDetails = ({ match }) => {
    // Extract the news id from the URL parameter
    const { id } = useParams();

  const selectedNews = NewsData.find(news => news.id === parseInt(id, 10));

  if (!selectedNews) {
    // Handle the case where the news item is not found
    return (
      <div>
        <h1>News Not Found</h1>
      
      </div>
    );
  }

  return (
    <div>
      <nav className="navbar navbar-light">
  
  <NavLink to="/">
      <i className="bi bi-arrow-left-circle-fill return-circle"></i>
   </NavLink>
  
</nav>
<div className="main-newsdetails">
        <img className="news-main-img" src={selectedNews.imageUrl} alt={selectedNews.title} />
        <h2 className="text-white">{selectedNews.title}</h2>
      <p className="text-white">{selectedNews.content}</p>
      </div>

    </div>
  )
}

export default NewsDetails