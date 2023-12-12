import React from 'react'

const NewsDetails = ({ match }) => {
    // Extract the news id from the URL parameter
  const { id } = match.params;

  // Fetch the details of the news item with the id
  // You can use an API call or some other method to get the details


  return (
    <div>
        <h1>Main paige for news</h1>
    </div>
  )
}

export default NewsDetails