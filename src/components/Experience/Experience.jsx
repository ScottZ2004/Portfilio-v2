import "./Experience.scss";
import ExperienceCard from "./ExperienceCard/ExperienceCard";
import experience from "../../json/experience.json";
import Project from "@/components/Projects/Project/Project";
const Experience = () => {
    return (
        <section id="experience">
            <h3>Experience</h3>
            <div id="experience-container">
                {experience.map((oExperience, index) => {
                    return <ExperienceCard key={index} experience={oExperience} />;
                })}
            </div>
        </section>
    )
}

export default Experience;