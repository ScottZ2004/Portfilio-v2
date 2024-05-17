"use client";
import { useLanguage } from "@/context/LanguageContext";
import "./ExperienceCard.scss";
const ExperienceCard = (props) => {
    const {language} = useLanguage()
    return (
        <div className="experienceCard">
            <img src={props.experience.image} alt="Experience"/>
            <span></span>
            <div>
                <h3>{props.experience.title}</h3>
                <p>{props.experience.description[language]}</p>
            </div>
        </div>
    )
}

export default ExperienceCard