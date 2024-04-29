import "./App.css";
import { BrowserRouter as Router, Routes, Route  } from "react-router-dom";
import React, { Suspense } from "react";

//pages & components
import Home from "./pages/Home.js";
import Footer from "./components/Footer.js";

const About = React.lazy(() => import("./pages/About.js"));
const Contact = React.lazy(() => import("./pages/Contact.js"));
const NewsDetails = React.lazy(() => import("./pages/NewsDetails.js"));
const News = React.lazy(() => import("./pages/News.js"));
const Music = React.lazy(() => import("./pages/Music.js"));
const Merch = React.lazy(() => import("./pages/Merch.js"));

function App() {
	
	return (
		<div className="App">
			<Router>
				
			<Suspense fallback={<div>Loading...</div>}>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
						<Route path="/contact" element={<Contact></Contact>}></Route>

<Route path="/merchandise" element={<Merch></Merch>}></Route>

<Route path="/music" element={<Music></Music>}></Route>
<Route path="/news" element={<News></News>}></Route>
<Route path="/news/:id" element={<NewsDetails />}></Route>
                    </Routes>
                </Suspense>

				

				<footer>
					<Footer></Footer>
				</footer>
			</Router>
		</div>
	);
}

export default App;
