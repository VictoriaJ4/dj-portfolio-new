import React from "react";
import "./About.css";
import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
//img
import piotr from "../img/piotr.png";

const About = () => {
	const texts = [
		"ReQon is a renowned hardstyle artist known for crafting energetic and impactful sets within the hard dance music scene. With a signature blend of pounding kicks, euphoric melodies, and intricate sound design.",
		"His performances often feature a dynamic mix of Raw / Rtra Raw hardstyle anthems and cutting-edge tracks, creating an electrifying atmosphere that resonates with fans. ",
		"DJ ReQon, like many artists, stands for individual expression, artistic innovation, and a passion for the hardstyle genre. His music reflects a commitment to pushing boundaries within the electronic dance music scene, blending powerful beats with emotive melodies. ",
		"Additionally, artists often stand for values such as unity, self-expression, and the shared experience of music, fostering a sense of community among fans. While specific personal beliefs or values may vary, the core of what ReQon represents is likely rooted in the creative and transformative power of music.",
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
