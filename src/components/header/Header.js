import "./Header.scss";
import logo from"../../assets/logos/BrainFlix-logo.svg";


export default function Header() {
    return (
        <header className="header">
            <nav className="navbar">
                <div className="navbar__container">
                    <img src={logo} className="navbar__logo" alt="Brainflix logo" />
                    <div className="navbar__rightContainer">
                        <div className="navbar__input-wrapper">
                        <div className="navbar__input-container">
                        <input type="text" name="search" placeholder="Search" className="navbar__input"/>
                        
                        </div>
                        <div className="navbar__image--mobile"></div>
                        </div>
                        <div className="navbar__button-container">
                        <button className="navbar__button">UPLOAD</button>
                        
                        </div>
                        <div className="navbar__image--tablet"></div>
                        
                    </div>
                </div>
            </nav>
        </header>







        );
    }