import ChangePageButton from '../components/ChangePageButton';
import InfoPopup from '../components/InfoPopup';
import './MainPage.css'
import '../components/ChangePageButton.css'
import '../components/InfoPopup.css'

export default function MainPage() {
    return(
        <div className="main-page-container">
            <h1> Iter Lingua </h1>
            <div className="create-buttons-container">
                <ChangePageButton className="course-button start-course-button" text="Start course"/>
            </div>
            <div className="create-buttons-container">
                <ChangePageButton className="course-button create-course-button" text="Create course"/>
                <ChangePageButton className="course-button load-course-button" text="Load course"/>
            </div>
            <InfoPopup classNameContainer="main-info-container" text="some about info"/>
        </div>
    )
}