"use client";
import "./Navigation.scss";
import logo from "&/images/logo/logo_scott_1.png";
import naviagtionJson from "@/json/sections/navigation.json";
import { useLanguage } from "@/context/LanguageContext";
import { Squash as Hamburger } from 'hamburger-react'
import { useState } from "react";
function Navigation() {
    const {language} = useLanguage()
    const [isOpen, setIsOpen] = useState(false);
    const handleClick = () => {
        setIsOpen(!isOpen);
    }
    return (
        <header>
            <div id="navigation">
                <a href="#home"><img src={logo.src} alt="logo"/></a>
                <ul id="standard">
                    {naviagtionJson.map((navigation, index) => {
                        return( <li key={index}><a href={navigation.link}>{navigation.title[language]}</a></li>)
                    })}
                </ul>
                <div id="hamburger-container">
                    <Hamburger
                        toggled={isOpen}
                        toggle={handleClick}
                        color="#02353C"
                        size={48}
                        rounded
                        distance="md"
                        hideOutline={false}
                    />
                </div>
            </div>
            {isOpen ? (
                <ul id="hamburger">
                    {naviagtionJson.map((navigation, index) => {
                    return( <li key={index}><a onClick={handleClick} href={navigation.link}>{navigation.title[language]}</a></li>)
                    })}
                </ul>
            ) : null}
        </header>
    );
}

export default Navigation;