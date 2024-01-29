import React from "react";

// import SoundCloud from "react-soundcloud-widget";
import "./Music.css";

const Music = () => {
	const generateIframe = (trackUrl , index) => (
		<iframe
			className="music-iframe"
			width="50%"
			height="166"
			scrolling="no"
			frameBorder="no"
			allow="autoplay"
			title={`SoundCloud Track ${index + 1}`} // Add a unique title for each iframe
			src={`https://w.soundcloud.com/player/?url=${encodeURIComponent(
				trackUrl
			)}&{ ADD YOUR PARAMETERS HERE }`}
			key={trackUrl} // Add a unique key for each iframe
		></iframe>
	);

	// Usage
	const trackUrls = [
		"https%3A//api.soundcloud.com/tracks/1647051300",
		"https://api.soundcloud.com/tracks/1657975377",
		"https://api.soundcloud.com/tracks/1557021136",
		"https://api.soundcloud.com/tracks/1552521283",
	];
	const iframes = trackUrls.map((trackUrl, index) => generateIframe(trackUrl, index));

	return (
		<div id="Music" className="music-main">
			<div className="container text-center">
				<div className="row ">
					<div className="col-12 col-lg-4">
						<h2 className="text-white live-vid ">Live videos</h2>
					</div>
					<div className="col-12 col-lg-8">col-8</div>
				</div>
				<div className="row">
					<div className="col-12 col-lg-4">
						<h2 className="text-white live-vid">Music</h2>
					</div>
					<div className="col-12 col-lg-8 music-tracks" title={iframes}>{iframes}</div>
				</div>
			</div>
		</div>
	);
};

export default Music;
