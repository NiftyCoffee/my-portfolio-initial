import './Contact.css';
import github_icon from '../assets/github-icon.svg';
import instagram_icon from '../assets/instagram-icon.svg';
import linkedin_icon from '../assets/linkedin-icon.svg';

const Contact = () => {
    return (
        <>
            <div id="contact">
                <div className="contact-container">
                    <h3 className="contact-pretitle">Get In Touch</h3>
                    <h2 className="contact-header main-font">Contact</h2>
                    <div className="socials">
                        <img className="github-icon" src={github_icon} alt="" />
                        <img className="instagram-icon" src={instagram_icon} alt="" />
                        <img className="linkedin-icon" src={linkedin_icon} alt="" />
                    </div>
                    <p className="contact-message">Feel free to shoot me an email for any enquiries, or even just a chat!</p>
                    <div className="email-btn-container">
                        <button className="email-btn">Send Message</button>
                        <span className="email-btn-shadow"></span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact