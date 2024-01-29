import React from "react";
import "./Footer.css";
import { Link } from "react-scroll";


//logo
import logo from "../img/Reqon-Logo-White.png"

const Footer = () => {
	const openInNewTab = (url) => {
		window.open(url, "_blank", "noreferrer");
	};

	return (
		<div>
			<footer className="navbar justify-content-center main-box">
				<div className="row footer-row">
					<div className="col-6 col-md-6 col-lg-4">
					<img src={logo}  className="logo-white"></img>
					</div>

					<div className="col-6 col-md-6 col-lg-2 ">
						<p className="text-white title-text-foot">MANAGEMENT</p>
						<p className="text-white"><a className="management-email"href="mailto:reqonmusic@gmail.com">reqonmusic@gmail.com</a></p>
					</div>

					<div className="col-6 col-md-6 col-lg-2 ">
						<p className="text-white title-text-foot">SHORTS</p>
						<Link
									to="About"
									spy={true}
									smooth={true}
									duration={500}
								><p className="text-white">About</p></Link>
								<Link
									to="Music"
									spy={true}
									smooth={true}
									offset={0}
									duration={500}
									
								><p className="text-white">Music</p></Link>
						<Link
									to="News"
									spy={true}
									smooth={true}
									offset={0}
									duration={500}
								
								>	<p className="text-white">News</p></Link>
					<Link
									to="Merch"
									spy={true}
									smooth={true}
									offset={0}
									duration={500}
									
								><p className="text-white">Merchandise</p></Link>
						<Link
									to="Contact"
									spy={true}
									smooth={true}
									offset={0}
									duration={500}
									
								><p className="text-white">Contact</p></Link>
						
					</div>

					<div className="col-6 col-md-6 col-lg-2 ">
						<p className="text-white title-text-foot">SOCIAL MEDIA</p>
						<div className="d-flex flex-column">
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
							
						
							<div className="d-flex flex-column align-items-center">
							
							<i className="fa-brands fa-soundcloud " onClick={() =>
										openInNewTab("https://soundcloud.com/piotr-dobek")}
										alt="social media icon of sound cloud"
									
										></i>
							</div>
						</div>
					</div>
				</div>
				{/* COPYRIGHT */}
				<div className="col-2 ">
					<p className="  copyright-text">© 2023 Copyright: Dirty mind</p>
				</div>
				<div className="col-2">
					<p className=" copyright-text"> Website Development: <a href="https://main--vj-webdev-portfolio.netlify.app/">Victoria J.</a></p>
				</div>
			</footer>
		</div>
	);
};

export default Footer;
