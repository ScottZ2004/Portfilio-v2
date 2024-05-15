import "./Footer.scss";
import logo from "../../../public/images/logo/logo_scott_diapositief.png";
import globe from "../../../public/images/svg/globe.svg";
import phone from "../../../public/images/svg/phone.svg";
import mail from "../../../public/images/svg/mail.svg";
const Footer = () => {
    return (
        <section id="footer">
            <img src={logo.src} alt="logo"/>
            <div>
                <ul>
                    <h3>Navigate</h3>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#about">About me</a></li>
                    <li><a href="#experience">Experience</a></li>
                </ul>
                <ul>
                    <h3>Relevant</h3>
                    <li><a href="https://www.linkedin.com/in/scottzico/" target="_blank">Linkedin</a></li>
                    <li><a href="https://github.com/ScottZ2004" target="_blank">Github</a></li>
                </ul>
                <ul>
                    <h3>Language</h3>
                    <li><a href=""></a></li>
                </ul>
                <ul>
                    <h3>Contact</h3>
                    <li><a href="tel:+316 25082193"><img src={phone.src} alt="phone number"/>+31 06 25082193</a>
                    </li>
                    <li><a href="mailto:scottzico2004@gmail.com"><img src={mail.src} alt="email"/>scottzico2004@gmail.com</a></li>
                </ul>
            </div>
        </section>
    )
}

export default Footer;