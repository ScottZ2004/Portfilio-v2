"use client"
import "./Header.scss";
import arrow from "&/images/svg/arrow.svg";
import homeJson from "&/json/sections/home.json";
import { useLanguage } from "@/context/LanguageContext";

const Header = () => {
    const {language} = useLanguage()
    return (
        <section id="home">
            <h1 dangerouslySetInnerHTML={{__html: homeJson.quote[language]}}>
            </h1>
            <h2>- Scott Zico</h2>
            <div>
                <h3>{homeJson.myProjects[language]}</h3>
                <img src={arrow.src} alt="arrow"/>
            </div>
        </section>
    )
}

export default Header;