import React from "react";
import "./About.css";
import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
//img
import piotr from "../img/piotr.png";

const About = () => {
	const texts = [
		"Piotr Dobek/Dirty Mind (formerly Revision) was born in Poland (Zabrze) on August 14th, 1987. For the first time, he heard Hardstyle music at the age of 15 when his friends showed him a recording of qlimax.",
		"He fell in love with this genre so much that he decided to learn to play and try his hand at music production. He bought his first console in 2012 and started learning how to play.",
		"He started attending DJ lessons to improve his skills, and he was advised against playing this genre due to its low popularity in the country. Despite everything, at home, he perfected his playing technique.",
		"The greatest success was the opportunity to play an opening set in Energy2000 where the special guest was Rebellion. One day, DiamondSkull noticed him and decided to help his career and give some very important tips",
	];

	const [currentTextIndex, setCurrentTextIndex] = useState(0);
	const textContainerRef = useRef(null);
	const column1Ref = useRef(null);

	useEffect(() => {
		if (textContainerRef.current) {
			gsap.fromTo(
				textContainerRef.current,
				{ x: textContainerRef.current.clientWidth },
				{ x: 0, duration: 0.5 }
			);
		}
	}, [currentTextIndex]);

	const handleButtonClick = () => {
		if (textContainerRef.current) {
			gsap.to(textContainerRef.current, {
				x: -textContainerRef.current.clientWidth,
				duration: 0.5,
				onComplete: () => {
					setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
				},
			});
		}
	};

	return (
		<div id="About">
			<div className="container about-section">
				<div className="row">
					<div className="col " ref={column1Ref}>
						<img
							src={piotr}
							className="portret"
							alt="portrait of dj dirty mind dark picture of a man"
						/>
					</div>

					<div className="col">
						<h1 className="text-white title-about">About</h1>

						<div className="about-text">
							<p className="text-white only-about-text" ref={textContainerRef}>
								{texts[currentTextIndex]}
							</p>
							<button className="cta-button " onClick={handleButtonClick}>
								Read more <i class="bi bi-arrow-right-circle"></i>
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
