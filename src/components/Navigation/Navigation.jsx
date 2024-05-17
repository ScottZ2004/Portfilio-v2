"use client";
import "./Navigation.scss";
import logo from "../../../public/images/logo/logo_scott_1.png";
import naviagtionJson from "../../json/sections/navigation.json";
import { useLanguage } from "@/context/LanguageContext";
function Navigation() {
    const {language} = useLanguage()
    return (
        <header>
            <a href="#home"><img src={logo.src} alt="logo"/></a>
            <ul>
                {naviagtionJson.map((navigation, index) => {
                    return( <li key={index}><a href={navigation.link}>{navigation.title[language]}</a></li>)
                })}
            </ul>
        </header>
    );
}

export default Navigation;