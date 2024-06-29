import MovingButton from "../components/MovingButton";
import "./Contacts.css"

const Contacts = () => {

    return(
        <div className="contacts-main">
            <MovingButton>Facebook</MovingButton>
            <MovingButton>Instagram</MovingButton>
            <MovingButton>GitHub</MovingButton>
            <MovingButton>LinkedIn</MovingButton>
        </div>
    )

}

export default Contacts;