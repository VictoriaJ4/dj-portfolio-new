import React from "react";
import { useEffect } from "react";
import "./AnimatedText.css";
// import ScrollTrigger from "react-scroll-trigger";
import { gsap, ScrollTrigger } from "gsap/all";
import SplitTypeLibrary from "split-type";
import Lenis from "@studio-freight/lenis";

const AnimatedText = () => {
	useEffect(() => {
		const lenis = new Lenis({
			// Pass your options here if needed
		});

		lenis.on("scroll", ScrollTrigger.update);

		gsap.ticker.add((time) => {
			lenis.raf(time * 10000);
		});

		gsap.ticker.lagSmoothing(0);
	}, []);

	useEffect(() => {
		gsap.registerPlugin(ScrollTrigger);

		gsap.utils.toArray(".reveal-type").forEach((el) => {
			const splitText = new SplitTypeLibrary(el, { type: "chars" });

			gsap.from(splitText.chars, {
				color: "#ffffff",
				duration: 0.5,
				delay: 0.2,
				stagger: 0.05,
				scrollTrigger: {
					trigger: el,
					// start: "top 80%",
					// end: "bottom 20%",
					toggleActions: "play none none reverse",
					// markers: true,
				},
				onComplete: () => {
					gsap.to(splitText.chars, {
						color: "#7158e2",
						duration: 0.5,
						stagger: 0.05,
					});
				},
			});
		});
	}, []);

	return (
		<div>
			<section>
				<p className="reveal-type">Coming soon</p>
			</section>
		</div>
	);
};

export default AnimatedText;
