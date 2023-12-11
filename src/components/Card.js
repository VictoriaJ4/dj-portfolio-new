// Card.js
import React from "react";

const Card = ({ imageUrl, title, text }) => {
	return (
		<div className="card" style={{ width: "18rem" }}>
			<img src={imageUrl} className="card-img-top" alt="..." />
			<div className="card-body">
				<h5 className="card-title">{title}</h5>
				<p className="card-text">{text}</p>
				<a href="#" className="btn btn-primary">
					Read more
				</a>
			</div>
		</div>
	);
};

export default Card;
