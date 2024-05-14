import "./ExperienceCard.scss";
const ExperienceCard = (props) => {
    return (
        <div className="experienceCard">
            <img src={props.experience.image} alt="Experience"/>
            <span></span>
            <div>
                <h3>{props.experience.title}</h3>
                <p>{props.experience.description}</p>
            </div>
        </div>
    )
}

export default ExperienceCard