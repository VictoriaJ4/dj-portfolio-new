import React from "react";
import "./Merch.css";
import "../components/AnimatedText.js";
//img
import piotr from "../img/merch-piotr.jpg";
import AnimatedText from "../components/AnimatedText.js";

const Merch = () => {
	return (
		<div id="Merch" className="merch-main">
			<div class="container text-center">
				<div class="row">
					<div class="col">
						<h4 className="text-white title-merch">Merchandise</h4>
						<AnimatedText></AnimatedText>
					</div>
					<div class="col">
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
