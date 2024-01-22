import React from "react";
import "./Contact.css";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
	const form = useRef();

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs
			.sendForm(
				"service_bccxgen",
				"template_e3zo5sb",
				e.target,
				"ncVkRuFo9y5JWPOl_"
			)
			.then(
				(result) => {
					toast.success("Your email was sent succesfully!");
					form.current.reset();
				},
				(error) => {
					toast.error("Error, you email haven't been sent. Try again.");
				}
			);
	};

	return (
		<div id="Contact" className="container main-contact">
			<ToastContainer />
			<div className="contact-box">
				<div className="contact-content">
					<div className="row">
						<div className="col-12 col-md-6 col-lg-6  first-text mx-auto">
							<h4 className="contact-text">Contact me!</h4>
							<div className="vertical-line"></div>
							<p className="contact-small-text">
								Send our team a quick message with your question, project ideas
								and we’ll get back to you as soon as possible. We’re pretty
								responsive and will try to respond in a few hours 🙂
							</p>
						</div>

						<div className="col-12 col-md-6 col-lg-5 mx-auto">
							<form className="whole-form" ref={form} onSubmit={sendEmail}>
								<div className="form-group">
									<label for="exampleInputEmail1">Name</label>
									<input
										type="text"
										className="form-control"
										placeholder="Name"
										name="user_name"
										required
									/>
								</div>

								<div className="form-group">
									<label for="exampleInputEmail1">Email address</label>
									<input
										type="email"
										name="user_email"
										className="form-control"
										id="exampleInputEmail1"
										aria-describedby="emailHelp"
										placeholder="Enter email"
										required
									/>
								</div>

								<div className="form-group">
									<label for="exampleInputEmail1">Phone</label>
									<input
										type="tel"
										id="typePhone"
										class="form-control"
										name="user_phone"
									/>
								</div>

								<div className="form-group">
									<label for="exampleInputEmail1">Comment or Message</label>
									<textarea
										className="form-control"
										id="exampleFormControlTextarea1"
										rows="3"
										placeholder="Your message"
										name="message"
										maxLength={500}
										minLength={5}
										required
									></textarea>
								</div>

								<div className="form-check">
									<input
										type="checkbox"
										className="form-check-input"
										id="exampleCheck1"
										required
									/>
									<label className="form-check-label" for="exampleCheck1">
										Check me out
									</label>
								</div>
								<button type="submit" className="cta-button form-button">
									Send message
								</button>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Contact;
