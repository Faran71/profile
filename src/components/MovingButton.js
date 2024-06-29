import { useEffect, useRef, useState } from "react";
import "./MovingButton.css"

const MovingButton = ({children}) => {

    const buttonRef = useRef(null);
    const [isHovered, setIsHovered] = useState(false);
    const [windowSize, setWindowSize] = useState({ width: window.innerWidth, height: window.innerHeight });

    useEffect(() => {
        const handleResize = () => {
            setWindowSize({ width: window.innerWidth, height: window.innerHeight });
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        const button = buttonRef.current;

        let posX = Math.random() * (windowSize.width - button.clientWidth);
        let posY = Math.random() * (windowSize.height - button.clientHeight);
        let speedX = (Math.random() - 0.5) * 10;
        let speedY = (Math.random() - 0.5) * 10;
        // let posX = 0;
        // let posY = 0;
        // let speedX = 0.4;
        // let speedY = 0.4;

        const moveButton = () => {
            if (!isHovered) {
                posX += speedX;
                posY += speedY;

                if (posX <= 0 || posX >= windowSize.width - button.clientWidth) {
                    speedX = -speedX;
                }
                if (posY <= 0 || posY >= windowSize.height - button.clientHeight) {
                    speedY = -speedY;
                }

                button.style.transform = `translate(${posX}px, ${posY}px)`;
            }
            requestAnimationFrame(moveButton);
        };

        moveButton();
    },[isHovered, windowSize]);

    return(
        <button
            ref={buttonRef}
            className="moving-button"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}>
                {children}
        </button>
    )

}

export default MovingButton;