import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";
import { Link } from "react-scroll";

//logo
import logo from "../img/Reqon-Logo-White.png"

const NavBar = () => {
	const openInNewTab = (url) => {
		window.open(url, "_blank", "noreferrer");
	};

	return (
		<div>
			<nav className="navbar navbar-expand-lg custom-navbar">
				<div className="container-fluid box-width">
					<NavLink to="/">
						{/* <p className="navbar-brand text-white">Logo</p> */}
						<img src={logo}  className="logo-white" alt="reqon music logo"></img>
					</NavLink>
					<button
						className="navbar-toggler hamburger"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarNav"
						aria-controls="navbarNav"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<i className="bi bi-list"></i>
					
					</button>
					<div className="collapse navbar-collapse " id="navbarNav">
						<ul className="navbar-nav mx-auto ">
							<li className="nav-item">
								<Link
									to="About"
									spy={true}
									smooth={true}
									className="nav-link nav-buttons text-white"
									duration={500}
								>
									About
								</Link>
							</li>
							<li className="nav-item">
								<Link
									to="Music"
									spy={true}
									smooth={true}
									offset={0}
									duration={500}
									className="nav-link  nav-buttons text-white"
								>
									Music
								</Link>
							</li>
							<li className="nav-item">
								<Link
									to="News"
									spy={true}
									smooth={true}
									offset={0}
									duration={500}
									className="nav-link  nav-buttons text-white"
								>
									News
								</Link>
							</li>
							<li className="nav-item">
								<Link
									to="Merch"
									spy={true}
									smooth={true}
									offset={0}
									duration={500}
									className="nav-link  nav-buttons text-white"
								>
									Merchandise
								</Link>
							</li>
							<li className="nav-item">
								<Link
									to="Contact"
									spy={true}
									smooth={true}
									offset={0}
									duration={500}
									className="nav-link  nav-buttons text-white"
								>
									Contact
								</Link>
							</li>
						</ul>
						<div className="icons text-white">
							<i
								className="bi bi-instagram"
								onClick={() =>
									openInNewTab(
										"https://instagram.com/dirty_mindofficial?igshid=MzMyNGUyNmU2YQ== "
									)
								}
							></i>
							<i
								className="bi bi-facebook"
								onClick={() =>
									openInNewTab(
										"https://m.facebook.com/profile.php/?id=100000056558185 "
									)
								}
							></i>
							<i
								className="bi bi-tiktok"
								onClick={() =>
									openInNewTab(
										"https://www.tiktok.com/@dirty_mindofficial?ug_source=op.auth&ug_term=Linktr.ee&utm_source=awyc6vc625ejxp86&utm_campaign=tt4d_profile_link&_r=1"
									)
								}
							></i>
							<i className="fa-brands fa-soundcloud socialmedia" onClick={() =>
										openInNewTab("https://soundcloud.com/piotr-dobek")}
										alt="social media icon of sound cloud"
									
										></i>
						</div>
					</div>
				</div>
			</nav>
		</div>
	);
};

export default NavBar;
