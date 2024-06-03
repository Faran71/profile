import "./AboutMe.css"

const AboutMe = () => {

    return(
        <div className="about-me-main">
            <div className="image-me">
                <img src="/ProfilePicture.jpg"/>
                
            </div>
            <div className="description">
                <h1>Muhammad Faran Sarwar</h1>
                <p>Graduted from University with a Bachelors and Masters in Astrophysics.
                    To follow my passion of Technology, I decided to complete Bright Network Technology Academys 
                    <a href="https://www.credly.com/badges/31c82a9c-43a4-4fa0-bd8e-849adc4fd3c1/public_url" target="_blank"> 
                     TechSkills Gold Accredited Software Engineering Bootcamp</a>.
                    I learnt Java, Spring Boot, SQL, PostgreSQL, HTML, CSS, JavaScript and REACT.
                    Also, I have expereince coding in Python and MATLAB. 
                    Alongside my projects, I also completed the<a href="https://www.credly.com/badges/e15e9936-b781-4394-831f-18babf485e26/public_url" target="_blank"> AWS Cloud Practitional Foundational Certification</a>
                </p>
            </div>
        </div>
    )

}

export default AboutMe;