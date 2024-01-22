import { useState } from "react";
import "./Buttons.css"

const Buttons = () => {

    const [clicked, setClicked] = useState(false);

    const handleMiddleButtonCLicked = () => {
        setClicked(!clicked);
    }

    const OpenFLink = () => {
        window.open('https://www.facebook.com/muhammad.faran.3954/', '_blank')
        setClicked(!clicked)
    }
    const OpenLLink = () => {
        window.open('https://www.linkedin.com/in/muhammad-faran-sarwar-3747651b1/', '_blank')
        setClicked(!clicked)
    }
    const OpenILink = () => {
        window.open('https://www.instagram.com/m.faran.s/', '_blank')
        setClicked(!clicked)
    }
    const OpenGLink = () => {
        window.open('https://github.com/Faran71', '_blank')
        setClicked(!clicked)
    }


    return(
        <div className="buttons">
            {!clicked && (
                <>
                    <button className="btn-center" onClick={handleMiddleButtonCLicked}>Click</button>
                </>
            )}
            
            {clicked && (
                <>
                    <button className="btn1" onClick={OpenFLink}><img src="./facebook.png" /></button>
                    <button className="btn1" onClick={OpenLLink}>Linkedin</button>
                    <button className="btn1" onClick={OpenILink}>Instagram</button>
                    <button className="btn1" onClick={OpenGLink}>Github</button>
                </>
            )}
            {/* <button className="btn1">fun</button> */}
            
        </div>
    )
}

export default Buttons;