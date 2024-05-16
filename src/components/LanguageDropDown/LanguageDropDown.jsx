"use client";
import { useLanguage } from "@/context/LanguageContext";
import "./LanguageDropDown.scss";
import globe from "../../../public/images/svg/globe.svg";

const LanguageDropDown = () => {
    const {setLanguage, language} = useLanguage();
    const handleChange = (event) => {
        setLanguage(event.target.value);
    }

    return (
        <form id="languageDropDown">
            <img src={globe.src} alt="language" />
            <select name="language" onChange={handleChange}>
                <option defaultChecked value="en">EN</option>
                <option value="nl">NL</option>
            </select>
        </form>
    )
}
export default LanguageDropDown;