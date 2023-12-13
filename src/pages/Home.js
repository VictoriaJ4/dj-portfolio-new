import React from "react";

import "./Home.css";
import NavBar from "../components/NavBar.js"
import { Link } from "react-scroll";

// components & pages
import About from "./About.js";
import Contact from "./Contact.js";
import Merch from "./Merch.js";
import Music from "./Music.js";
import News from "./News.js";

const Home = () => {
	return (
		<>
		<div>
			<header className="headerstyle">
			<NavBar></NavBar>
			<div className="Home-div">
			<div className="button-container">
						<Link
							id="navbuttons"
							to="Contact"
							spy={true}
							smooth={true}
							offset={-10}
							duration={500}
						>
							<button type="button" className="cta-button home-button">
								Work with me
							</button>
						</Link>
						</div>
						</div>
						</header>
			
			<About></About>
			<Music></Music>
			<News></News>
			<Merch></Merch>
			<Contact></Contact>
		</div>
		</>
	);
};

export default Home;
