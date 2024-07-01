import CarouselFixed from "../components/CarouselFixed";
import CarouselSliding from "../components/CarouselSliding";
import "./Projects.css";
import { useState } from "react";

const Projects= () => {

    const [projectsList, setProjectsList] = useState([
        {
            title: "Personal Trainer",
            links: ["https://github.com/Faran71/personal_trainer_frontend","https://github.com/Faran71/personal_trainer_backend"],
            pictures: ["/personalTrainer1.png","/personalTrainer2.png","/personalTrainer3.png","/personalTrainer4.png"],
            description: "An website inspired by Strava. Created using Spring Boot and PostgreSQL for the backend and REACT for the frontend, other APIs from the internet are utilised. A user can create an account, add a workout, see previous workouts, find training plans, view food nutrition and view workouts for different bodyparts. The information for food nutrition and workouts are taken from an external API."
        },
        {
            title: "Fake Twitter",
            links: ["https://github.com/Faran71/fake_twitter_frontend","https://github.com/Faran71/fake_twitter_backend"],
            pictures: ["/twitter1.png","/twitter2.png"],
            description: "A simplified version of twitter. Created using Spring Boot and PostgreSQL for the backend and REACT for the frontend. A user can create an account, write a tweet, like a tweet, leave comments on a tweet. The details for the user where the sensitive information is encrypted."
        },
        {
            title: "E-Commerce",
            links: ["https://github.com/Faran71/capstone_backend_and_frontend"],
            pictures: ["/capstone1.png", "/capstone2.png"],
            description: "The project is a complete Full Stack website. The backend is made using Spring Boot and PostgreSQL and the frontend is made using REACT. Browsing the GitHub repository will show the various endpoints for the API created with Spring Boot. The user is able to create an account, browse through products using categories, rating and price range, make orders and view order history. The customer data stored in the database is encrypted."
        }
    ])

    const [currentProject, setCurrentProject] = useState(projectsList[2]);

    const displayLinks = currentProject.links.map((element) => {
        return(
            <div>
                <p>{element}</p>
            </div>
        )
    });

    const displayProjects = projectsList.map((temp) => {
        return(
            <div className="individual-project-div">
                <h1>{temp.title}</h1>
            </div>
        )
    })
    


    return(
        <div className="projects-main">
            <CarouselSliding projects={projectsList} className="carousel-sliding"/>
            {/* {displayProjects} */}
            {/* <div className="projects-btns">
                <button>Personal Trainer</button>
                <button>Fake Twitter</button>
                <button>E-Commerce</button>
            </div>
            <div className="projects-display">
                <h1>{currentProject.title}</h1>
                <CarouselFixed images={currentProject.pictures} />
                {displayLinks}
                
            </div> */}
        </div>
    )

}

export default Projects;