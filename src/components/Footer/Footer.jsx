"use client"
import "./Footer.scss";
import logo from "&/images/logo/logo_scott_diapositief.png";
import { useLanguage } from "@/context/LanguageContext";
import LanguageDropDown from "@/components/LanguageDropDown/LanguageDropDown";
import navigateJson from "@/json/sections/navigation.json"

import footerJson from "@/json/sections/footer.json";

const Footer = () => {
    const {language} = useLanguage();
    
    return (
        <section id="footer">
            <img src={logo.src} alt="logo"/>
            <div>
                {footerJson.map((item, index) => {
                    let children = [];
                    let child = null;
                    let forFooter = false;
                    if(Array.isArray(item.links)){
                        children = item.links;
                        forFooter = true;
                    }
                    else if(typeof item.links === "string"){
                        const firstChar = item.links.substring(0,1);
                        const lastChar = item.links.substring(item.links.length - 1);
                        const file = item.links.substring(1,item.links.length - 1)
                        if(firstChar === "{" && lastChar === "}"){
                            if(file === "navigation.json")
                                children = navigateJson;
                            
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
                                if(childItem.forFooter || forFooter ){
                                    return (
                                    <li key={childIndex}>
                                        {childItem.img? (
                                            <a href={childItem.link}>
                                                <img src={childItem.img} alt={childItem.title[language]} />
                                                {childItem.title[language]}
                                            </a>
                                        ) : (
                                            <a href={childItem.link}>{childItem.title[language]}</a>
                                        )}
                                    </li>
                                );
                                }
                            }) }
                        </ul>
                    )
                })}
            </div>
        </section>
    )
}

export default Footer;