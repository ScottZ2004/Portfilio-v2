"use client";
import "./Navigation.scss";
import logo from "&/images/logo/logo_scott_1.png";
import naviagtionJson from "@/json/sections/navigation.json";
import { useLanguage } from "@/context/LanguageContext";
import HamburgerMenu from "react-hamburger-menu";
import { useState } from "react";
function Navigation() {
    const {language} = useLanguage()
    const [isOpen, setIsOpen] = useState(false);
    const handleClick = () => {
        setIsOpen(!isOpen);
    }
    return (
        <header>
            <a href="#home"><img src={logo.src} alt="logo"/></a>
            <ul>
                {naviagtionJson.map((navigation, index) => {
                    return( <li key={index}><a href={navigation.link}>{navigation.title[language]}</a></li>)
                })}
            </ul>
            <div>
                <HamburgerMenu
                    isOpen={isOpen}
                    menuClicked={handleClick}
                    animationDuration={0.5}
                    borderRadius={9}
                    strokeWidth={4}
                    width={40}
                    height={32}
                    rotate={0}
                    color="#02353C"
                />
            </div>
        </header>
    );
}

export default Navigation;