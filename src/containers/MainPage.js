import { useEffect, useRef, useState } from "react";
import "./MainPage.css"

const MainPage = () => {

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
            <p>Hi</p>
            <div className="building-container">
                <img src="/building.png" alt="image" className='image' ref={imageRef}/>  
                {/* <button className="btn-top" style={{top: '8%', width: imageWidth*1.05}}>
                    <span className="tooltip">
                        <img src="/coffee.png" alt="coffee" className='coffee' style={{width: imageWidth}}/>
                    </span>
                </button> */}
                <button className="btn" style={{top: '28%', width: imageWidth}}>
                    <span className="tooltip">About Me</span>
                </button>
                <button className="btn" style={{top: '45%', width: imageWidth}}>
                    <span className="tooltip">About You</span>
                </button>
                <button className="btn" style={{top: '62%', width: imageWidth}}>
                    <span className="tooltip">About We</span>
                </button>
                <button className="btn" style={{top: '79%', width: imageWidth}}>
                    <span className="tooltip">About Them</span>
                </button>
            </div>
            
        </div>
    )

}

export default MainPage;