import React, { useEffect, useState } from "react";
import "./News.css";
// import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";
// import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Card from "../components/Card.js";
import SwiperCore from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
//img
import party1 from "../img/party.jpg";
const maxSlides = 6;
SwiperCore.use([Navigation]);

const News = () => {
	const [slides, setSlides] = useState(
		Array.from({ length: maxSlides }).map((_, index) => `Slide ${index + 1}`)
	);
	const [showExtraCards, setShowExtraCards] = useState(false);

	const toggleExtraCards = () => {
		console.log("Before toggle:", showExtraCards);
		setShowExtraCards(!showExtraCards);
		console.log("After toggle:", showExtraCards);
	};

	return (
		<div id="News" className="News">
			<div className="container">
				<h3 className="text-white news-text title-about">News</h3>
				<Swiper
					 spaceBetween={0}
					 navigation={{
					   nextEl: ".swiper-button-next",
					   prevEl: ".swiper-button-prev",
					 }}
					 loop={true}
					 loopedSlides={maxSlides}
					 slidesPerView={1}
					 breakpoints={{
					   // when window width is >= 768px (for example, tablets and larger screens)
					   768: {
						 slidesPerView: 3,
					   },
					 }}
				   
				>
					{slides.map((slideContent, index) => (
						<SwiperSlide key={index}>
							<div className={`${showExtraCards ? "extra-slide" : ""}`}>
								<Card
								 id={index + 1} 
									imageUrl={party1}
									title={slideContent}
									text="Some quick example text to build on the card title and make up
					the bulk of the card's content."
								/>
							</div>
						</SwiperSlide>
					))}
				</Swiper>

				<div
					className="swiper-button-prev d-none d-md-block"
					style={{ left: "40px", top: "335%" }}
				></div>
				<div
					className="swiper-button-next d-none d-md-block"
					onClick={toggleExtraCards}
					style={{ right: "60px", top: "335%" }}
				></div>
			</div>
		</div>
	);
};

export default News;
