import React, {  useState } from "react";
import "./News.css";
// import Swiper from "swiper";
import { Navigation } from "swiper/modules";
// import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Card from "../components/Card.js";
import SwiperCore from "swiper";
import {  Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { useEffect } from 'react';

//img
import party1 from "../img/party.jpg";
const maxSlides = 6;
SwiperCore.use([Autoplay, Navigation]);

const News = () => {
	const [slides, setSlides] = useState(
		Array.from({ length: maxSlides }).map((_, index) => `Slide ${index + 1}`)
	);
	const [showExtraCards, setShowExtraCards] = useState(false);

	useEffect(() => {
		// Log the slides when the component mounts
		console.log('Slides:', slides);
	  }, [slides]); // Make sure to include slides in the dependency array
 
	  
	const toggleExtraCards = () => {
		console.log("Before toggle:", showExtraCards);
		setShowExtraCards(!showExtraCards);
		console.log("After toggle:", showExtraCards);

		setSlides((prevSlides) => {
			if (showExtraCards) {
			  // Add extra slides when extra cards are shown
			  return [
				...prevSlides,
				`Extra Slide ${prevSlides.length + 1}`,
				`Extra Slide ${prevSlides.length + 2}`,
			  ];
			} else {
			  // Revert to the original set of slides when extra cards are hidden
			  return Array.from({ length: maxSlides }).map(
				(_, index) => `Slide ${index + 1}`
			  );
			}
		});
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
					 autoplay={{
						delay: 2500,
						disableOnInteraction: true,
					  }}
					  modules={[Autoplay,  Navigation]}
					 breakpoints={{
					   // when window width is >= 768px (for example, tablets and larger screens)
					   768: {
						slidesPerView: 2,
					  },
					  // when window width is >= 1200px (for example, big screens)
					  1200: {
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

				{/* <div
					className="swiper-button-prev d-none d-md-block"
					id="slider-arrows"
					style={{ left: "40px", top: "338%" }}
				></div> */}
				{/* <div
					className="swiper-button-next d-none d-md-block"
					onClick={toggleExtraCards}
					id="slider-arrows"
					style={{ right: "60px", top: "338%" }}
				></div> */}
			</div>
		</div>
	);
};

export default News;
