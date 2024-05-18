"use client";
import "./Project.scss";
import github from "&/images/svg/github.svg";
import { useLanguage } from "@/context/LanguageContext";

const Project = (props) => {
    const {language} = useLanguage();
    const topStyle = {
        backgroundColor: props.project.bgColor
    };
    const description = props.project.description[language];
    const title = props.project.title[language];

    const isTitle = (index) => {
        const sub = description.substr(index, title.length).toLowerCase();
        return sub === title.toLowerCase();
    };

    const renderDescription = () => {
        const result = [];
        let index = 0;

        while (index < description.length) {
            if (isTitle(index)) {
                result.push(
                    <a key={index} href={props.project.website} target="_blank" rel="noopener noreferrer">
                        {description.substr(index, title.length)}
                    </a>
                );
                index += title.length;
            } else {
                result.push(description[index]);
                index++;
            }
        }

        return result;
    };

    return (
        <div className="project">
            <div className="tag">
                {props.project.type[language]}
            </div>
            <div id="top" style={topStyle}>
                <img src={props.project.image} alt="project"/>
            </div>
            <div id="middle">
                <h3>{props.project.title[language]}</h3>
                <p>
                    {renderDescription()}
                </p>
            </div>
            <div id="bottom">
                <p>
                    Skills:
                    {props.project.skills.map((skill, index) => {
                        if (index === props.project.skills.length - 1) {
                            return " " + skill;
                        } else {
                            return " " + skill + ",";
                        }
                    })}
                </p>
                <div>
                    <a href={props.project.github} target="_blank">
                        <img src={github.src} alt="Github"/>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Project;
