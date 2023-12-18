import React from "react";
import "./Merch.css";
import "../components/AnimatedText.js";
//img
import piotr from "../img/merch-piotr.jpg";
import AnimatedText from "../components/AnimatedText.js";

const Merch = () => {
	return (
		<div id="Merch" className="merch-main">
			<div className="container text-center">
				<div className="row">
					<div className="col">
						<h4 className="text-white title-merch">Merchandise</h4>
						<AnimatedText></AnimatedText>
					</div>
					<div className="col">
						<img
							src={piotr}
							className="portrait-merch"
							alt="portrait of dj dirty mind on white background"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Merch;
