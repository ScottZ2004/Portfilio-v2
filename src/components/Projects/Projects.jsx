import "./Projects.scss";
import Project from "./Project/Project";
import projects from "&/json/sections/projects.json";
const Projects = () => {
    return (
        <section id="projects">
            {projects.map((project, index) => {
                return <Project key={index} project={project} />;
            })}
        </section>
    )
}

export default Projects;