import { useEffect, useRef, useState } from "react";
import "./MainPage.css"
import { useNavigate } from "react-router-dom";

const MainPage = () => {
    const navigate = useNavigate();

    const imageRef = useRef(null);
    const [imageWidth, setImageWidth] = useState(0);

    useEffect(() => {
        const handleResize = () => {
            if(imageRef.current){
                setImageWidth(imageRef.current.clientWidth * 0.5);
            }
        };
        handleResize();

        window.addEventListener('resize', handleResize);
        return() => {
            window.removeEventListener('resize', handleResize)
        };
    }, []);

    return(
        <div className="main-page">
            <p>Click any floor</p>
            <div className="building-container">
                <img src="/building.png" alt="image" className='image' ref={imageRef}/>  
                <button className="btn" style={{top: '28%', width: imageWidth}}
                onClick={() => {navigate("/AboutMe")}}>
                    <span className="tooltip">About Me</span>
                </button>
                <button className="btn" style={{top: '45%', width: imageWidth}}
                onClick={() => {navigate("/Projects")}}>
                    <span className="tooltip">Projects</span>
                </button>
                <button className="btn" style={{top: '62%', width: imageWidth}}
                onClick={() => {navigate("/Contacts")}}>
                    <span className="tooltip">Contacts</span>
                </button>
                <button className="btn" style={{top: '79%', width: imageWidth}}
                onClick={() => {navigate("/CV")}}>
                    <span className="tooltip">CV</span>
                </button>
            </div>
            
        </div>
    )

}

export default MainPage;