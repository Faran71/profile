import {motion} from "framer-motion"
import { useRef, useEffect, useState } from "react";
import "./CarouselSliding.css";


const CarouselSliding = ({projects}) => {

    const [width, setWidth] = useState(0);
    const carousel = useRef();
    const intervalRef = useRef(null);
  
    useEffect(() => {
      setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
      return () => clearInterval(intervalRef.current);
    }, []);
  
    return (
        <motion.div ref={carousel} className="carousel" whileTap={{cursor: "grabbing"}}>
          <motion.div 
          drag="x" 
          dragConstraints={{right:0, left: -width}} 
          className="inner-carousel"
          >
            {projects.map(project => {
              return(
                <motion.div className="item" key={project}>
                  <div className="individual-project-div">
                      <h1>{project.title}</h1>
                  </div>
                </motion.div>
              )
            }
              )}
          </motion.div>
        </motion.div>
      )
  } 
export default CarouselSliding;
