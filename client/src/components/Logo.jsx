import './Logo.css';
import border from '../assets/square-outline.svg';

const Logo = () => {
    return (
        <>
            <div className="logo">
                {/* <img className="border" src={border} alt=""/> */}
                <a href="#home">
                    <div className="hidden"><span className="main-font hidden">Z</span></div>
                    <div className="visible"><span className="main-font visible">Z</span></div>
                </a>
            </div>
        </>
    )
}

export default Logo