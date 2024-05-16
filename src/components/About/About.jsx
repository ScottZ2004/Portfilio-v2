"use client"
import portrait from "../../../public/images/portrait.png";
import "./About.scss";
import aboutJson from "../../json/sections/about.json"
import { useLanguage } from "@/context/LanguageContext";

const About = () => {
    const {language} = useLanguage()
    return (
        <section id="about">
            <div id="left">
                <h3>{aboutJson.title[language]}</h3>
                <p>
                    {aboutJson.description1[language]}
                    <br/>
                    <br/>
                    {aboutJson.description2[language]}

                </p>
            </div>
            <div id="right">
                <div></div>
                <img src={portrait.src} alt="portrait"/>
            </div>
        </section>
    )
}

export default About;