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
                            <h3 className="project-title main-font">Missing Web Tracker</h3>
                            <p className="project-desc">Web application that contains posts of missing people/pets data and uses the Google Maps API.</p>
                            <div className="project-btn">
                                <button>
                                    View GitHub
                                </button>
                                <span className="btn-shadow">View GitHub</span>
                            </div>
                        </li>
                        <li className="project-card">
                            <h3 className="project-title main-font">Missing Web Tracker</h3>
                            <p className="project-desc">Web application that contains posts of missing people/pets data and uses the Google Maps API.</p>
                            <div className="project-btn">
                                <button>
                                    View GitHub
                                </button>
                                <span className="btn-shadow">View GitHub</span>
                            </div>
                        </li>
                        <li className="project-card">
                            <h3 className="project-title main-font">Missing Web Tracker</h3>
                            <p className="project-desc">Web application that contains posts of missing people/pets data and uses the Google Maps API.</p>
                            <div className="project-btn">
                                <button>
                                    View GitHub
                                </button>
                                <span className="btn-shadow">View GitHub</span>
                            </div>
                        </li>
                    </ul>
                    <div className="resume-btn-container">
                        <button className="resume-btn">
                            View Resume
                        </button>
                        <img className="arrow-icon" src={arrow_icon} alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Projects