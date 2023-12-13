// Card.js
import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

const Card = ({ id,imageUrl, title, text }) => {
	const navigate = useNavigate();

	const handleCardClick = () => {
	  // Use the navigate function for programmatic navigation
	  navigate(`/news/${id}`);
	};
  

	return (
		<div className="card" style={{ width: "18rem" }} onClick={handleCardClick}>
			 <Link to={`/news/${id}`}>
			<img src={imageUrl} className="card-img-top" alt="..." />
			<div className="card-body">
				<h5 className="card-title">{title}</h5>
				<p className="card-text">{text}</p>
				 <a href="#" className="btn btn-primary">
          Read more
        </a>
		
			</div></Link>
		</div>
	);
};

export default Card;
