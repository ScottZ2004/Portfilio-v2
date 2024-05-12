import "./Header.scss";
import arrow from "./../../../public/images/svg/arrow.svg"
const Header = () => {
    return (
        <section id="home">
            <h1>
                Every <i>project</i> is a <i>puzzle</i> waiting to be <i>solved</i>
            </h1>
            <h2>Scott Zico</h2>
            <div>
                <h3>My puzzles</h3>
                <img src={arrow.src} alt="arrow"/>
            </div>
        </section>
    )
}

export default Header;