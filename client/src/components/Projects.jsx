import './Projects.css';
import arrow_icon from '../assets/arrow.svg';

const Projects = () => {
    return (
        <>
            <div id="projects">
                <div className="projects-container">
                    <h2>Featured Projects</h2>
                    <ul className="project-gallery">
                        <li className="project-card">
                            <h3 className="project-title main-font">Online Image Scanner</h3>
                            <p className="project-desc">Web application that takes uploaded images and presents extracted data in tabular format.</p>
                            <div className="project-btn">
                                <button>
                                    <a href="https://github.com/KohHaruki/SummerHack2023" target="_blank">View GitHub</a>
                                </button>
                                <span className="btn-shadow"></span>
                            </div>
                        </li>
                        <li className="project-card">
                            <h3 className="project-title main-font">Missing Web Tracker</h3>
                            <p className="project-desc">Web application that contains posts of missing people/pets data and uses the Google Maps API.</p>
                            <div className="project-btn">
                                <button>
                                    <a href="https://github.com/GrassyAirplane/missing-web-tracker" target="_blank">View GitHub</a>
                                </button>
                                <span className="btn-shadow"></span>
                            </div>
                        </li>
                        <li className="project-card">
                            <h3 className="project-title main-font">Roomba Delivery</h3>
                            <p className="project-desc">Python simulator of robots sorting packages within a console factory visualizer.</p>
                            <div className="project-btn">
                                <button>
                                    <a href="https://github.com/NiftyCoffee/mdashhack-roomba-solution" target="_blank">View GitHub</a>
                                </button>
                                <span className="btn-shadow"></span>
                            </div>
                        </li>
                    </ul>
                    <div className="resume-btn-container">
                        <button className="resume-btn">
                            <a href="https://drive.google.com/file/d/1p1qYHbDOktFQiwAzW9uvfqEiFiw7rn9V/view?usp=sharing" target="_blank">View Resume</a>
                        </button>
                        <img className="arrow-icon" src={arrow_icon} alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Projects