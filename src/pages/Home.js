import React from "react";

import "./Home.css";

// components & pages
import About from "./About.js";
import Contact from "./Contact.js";
import Merch from "./Merch.js";
import Music from "./Music.js";
import News from "./News.js";

const Home = () => {
	return (
		<div>
			<div className="Home-div"></div>
			<About></About>
			<Music></Music>
			<News></News>
			<Merch></Merch>
			<Contact></Contact>
		</div>
	);
};

export default Home;
