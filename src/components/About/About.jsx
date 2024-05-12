import portrait from "../../../public/images/portrait.png";
import "./About.scss";
const About = () => {
    return (
        <section id="about">
            <div id="left">
                <h3>About me</h3>
                <p>
                    Greetings! I'm Scott Zico van den Broek, a dedicated Software Development student at Mediacollege Amsterdam, where my passion for problem-solving meets my penchant for creative expression. Fascinated by the intricacies of both backend and frontend development, I find joy in navigating the complexities of database management while also reveling in the artistry of designing visually striking websites.

                    My journey in software development is driven by a dual focus: to deepen my expertise in backend development, exploring advanced techniques and technologies, while simultaneously honing my front-end skills to create seamless and immersive user experiences that captivate and inspire. Join me as I embark on this exhilarating voyage through the ever-evolving landscape of software development, fueled by curiosity, creativity, and an unwavering commitment to excellence.

                </p>
            </div>
            <div id="right">
                <img src={portrait.src} alt="portrait"/>
            </div>
        </section>
    )
}

export default About;