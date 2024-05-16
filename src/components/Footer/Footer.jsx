"use client"
import "./Footer.scss";
import logo from "../../../public/images/logo/logo_scott_diapositief.png";
import phone from "../../../public/images/svg/phone.svg";
import mail from "../../../public/images/svg/mail.svg";
import { useLanguage } from "@/context/LanguageContext";
import LanguageDropDown from "../LanguageDropDown/LanguageDropDown";
import navigateJson from "../../json/sections/navigation.json"

import footerJson from "../../json/sections/footer.json";

const Footer = () => {
    const {language} = useLanguage();
    
    return (
        <section id="footer">
            <img src={logo.src} alt="logo"/>
            <div>
                {footerJson.map((item, index) => {
                    let children = [];
                    let child = null
                    //str. substring(0, 1), for last character, use str. substring(str. length – 1)
                    if(Array.isArray(item.links)){
                        children = item.links
                    }
                    else if(typeof item.links === "string"){
                        const firstChar = item.links.substring(0,1);
                        const lastChar = item.links.substring(item.links.length - 1);
                        const file = item.links.substring(1,item.links.length - 1)
                        if(firstChar === "{" && lastChar === "}"){
                            if(file === "navigation.json")
                                children = navigateJson;
                            console.log()
                        }
                        if(firstChar === "~" && lastChar === "~"){
                            if(file === "languageDropDown")
                                child = (<LanguageDropDown />)
                        }
                    } 
                    return (
                        <ul key={index}>
                            <h3>{item.title[language]}</h3>
                            { child }
                            { children.map((childItem, childIndex)=>{
                                return (
                                    <li key={childIndex}>
                                        {childItem.img ? (
                                            <a href={childItem.link}>
                                                <img src={childItem.img} alt={childItem.title[language]} />
                                                {childItem.title[language]}
                                            </a>
                                        ) : (
                                            <a href={childItem.link}>{childItem.title[language]}</a>
                                        )}
                                    </li>
                                );
                            }) }
                        </ul>
                    )
                })}
            </div>
        </section>
    )
}

export default Footer;