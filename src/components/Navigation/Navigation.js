import "./Navigation.scss";
import logo from "../../../public/images/logo/logo_scott_1.png";
function Navigation() {
    return (
        <header>
            <a href="#home"><img src={logo.src} alt="logo"/></a>
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#experience">Experience</a></li>
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                <li><a href="mailto:scottzico2004@gmail.com">Let's get in touch</a></li>
            </ul>
        </header>
    );
}

export default Navigation;