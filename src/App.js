import "./App.css";
import { BrowserRouter as Router, Routes, Route  } from "react-router-dom";


import backgroundImage from "./img/dj.jpg";

//pages & components
import Home from "./pages/Home.js";
import About from "./pages/About.js";
import Contact from "./pages/Contact.js";
import Merch from "./pages/Merch.js";
import Music from "./pages/Music.js";
import News from "./pages/News.js";

import Footer from "./components/Footer.js";
import NewsDetails from "./pages/NewsDetails.js";

function App() {
	
	return (
		<div className="App">
			<Router>
				
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
