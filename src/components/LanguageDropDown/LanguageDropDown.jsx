"use client";
import { useLanguage } from "@/context/LanguageContext";
import "./LanguageDropDown.scss";

const LanguageDropDown = () => {
    const {setLanguage, language} = useLanguage();
    console.log(language);

    const handleChange = (event) => {
        setLanguage(event.target.value);
    }

    return (
        <select name="language" onChange={handleChange}>
            <option defaultChecked value="en">EN</option>
            <option value="nl">NL</option>
        </select>
    )
}
export default LanguageDropDown;