import styles from "./Home.scss";
import Navigation from "../../components/Navigation/Navigation";
import Header from "../../components/Header/Header";
import Projects from "../../components/Projects/Projects";
export default function Home() {
  return (
    <main>
        <Navigation/>
        <Header/>
        <Projects/>
    </main>
  );
}
