export default function InfoPopup({ classNameContainer, text }) {
    return(
        <div className={classNameContainer}>
            <p className="info-i"> i </p>
            <p className="info-text"> {text} </p>
        </div>
    )
}