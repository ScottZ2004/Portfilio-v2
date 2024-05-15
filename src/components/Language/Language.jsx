const Language = (props) => {
    const buttonClick = () => {
        props.setLanguage('nl');
    }
    return (
        <button onClick={buttonClick}></button>
    )
}
export default Language;