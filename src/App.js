import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Link } from "react-scroll";

//pages & components
import Home from "./pages/Home.js";
import About from "./pages/About.js";
import Contact from "./pages/Contact.js";
import Merch from "./pages/Merch.js";
import Music from "./pages/Music.js";
import News from "./pages/News.js";
import NavBar from "./components/NavBar.js";
import Footer from "./components/Footer.js";
import NewsDetails from "./pages/NewsDetails.js";

function App() {
	return (
		<div className="App">
			<Router>
				<header className="headerstyle">
					<NavBar></NavBar>
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
				</header>
				<Routes>
					<Route path="/" element={<Home></Home>}></Route>

					<Route path="/about" element={<About></About>}></Route>

					<Route path="/contact" element={<Contact></Contact>}></Route>

					<Route path="/merchandise" element={<Merch></Merch>}></Route>

					<Route path="/music" element={<Music></Music>}></Route>
					<Route path="/news" element={<News></News>}></Route>
					<Route path="/news/:id" element={<NewsDetails />}></Route>
				</Routes>

				<footer>
					<Footer></Footer>
				</footer>
			</Router>
		</div>
	);
}

export default App;
