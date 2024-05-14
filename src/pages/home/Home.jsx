import styles from "./Home.scss";
import Navigation from "../../components/Navigation/Navigation";
import Header from "../../components/Header/Header";
import Projects from "../../components/Projects/Projects";
import About from "../../components/About/About";
import Footer from "../../components/Footer/Footer";
import Experience from "../../components/Experience/Experience"
export default function Home() {
  return (
    <main>
        <Navigation/>
        <Header/>
        <Projects/>
        <About/>
        <Experience/>
        <Footer/>
    </main>
  );
}
