"use client";
import styles from "./Home.scss";
import Navigation from "../../components/Navigation/Navigation";
import Header from "../../components/Header/Header";
import Projects from "../../components/Projects/Projects";
import About from "../../components/About/About";
import Footer from "../../components/Footer/Footer";
import Experience from "../../components/Experience/Experience";
import {useState, useEffect} from "react";
export default function Home() {
    const [language, setLanguage] = useState("en");
    return (
    <main>
        <Navigation language={language}/>
        <Header language={language}/>
        <Projects language={language}/>
        <About language={language}/>
        <Experience language={language}/>
        <Footer language={language} setLanguage={setLanguage}/>
    </main>
  );
}
