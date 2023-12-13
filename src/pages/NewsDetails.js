import React from 'react'
import NewsData from './NewsData.js'
import { useParams } from 'react-router-dom';


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
        <h1 className="text-white">Main paige for news</h1>
        <h2>{selectedNews.title}</h2>
      <img src={selectedNews.imageUrl} alt={selectedNews.title} />
      <p>{selectedNews.content}</p>
    </div>
  )
}

export default NewsDetails