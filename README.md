## Personal Front end portfolio

This is a personal portfolio website for Reqon (dj and producer), showcasing his skills, mixes, and  tracks. The project is built using JavaScript and utilizes the SoundCloud API to integrate dynamic audio content.

## Features
- Home: Attract attention with a captivating homepage.
Prominent "Work with me" button to direct users to collaboration opportunities.

- About section: Showcase personality and connection with the user.

- Music section: Display your best mixes with a sleek and customizable player powered by the SoundCloud API.

- News : Keep the audience updated with the latest news and announcements.

- Merch: Showcase your merchandise with high-quality images and descriptions.
Provide links for fans to purchase your exclusive DJ merchandise. (TO DO)

- Contact: contact form connected to Emailjs for easy communication.


## Technologies Used 
- JavaScript
- CSS/ HTML
- SoundCloud API
- FontAwesome for icons
- Bootstrap for icons/ design
- Emailjs for the contact form integration

## Getting Started
To set up the DJ Portfolio on your local machine, follow these steps:

Clone the repository:

Copy code
git clone https://github.com/your-username/dj-portfolio.git
Navigate to the project directory:


Copy code
cd dj-portfolio

### npm start 

## SoundCloud API

The Music Section of this portfolio project integrates the SoundCloud API to dynamically fetch and showcase the DJ's best mixes. The SoundCloud API provides a seamless way to access audio content, allowing you to personalize your portfolio with the latest and greatest mixes. For detailed information on the SoundCloud API's functionality, endpoints, parameters, and responses, please refer to the SoundCloud API documentation.

Link: https://developers.soundcloud.com/docs 

## API Key
To make use of the SoundCloud API, you need to obtain an API key by registering your application on the SoundCloud Developer Portal. Once registered, replace the placeholder values in the script.js file (lines 12-13) with your actual client ID and user ID:


const clientId = 'your-client-id';
const userId = 'your-user-id';

