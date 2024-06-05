import "./CV.css"

const CV = () => {

    return(
        <div className="cv-main">
            <div className="cv-text">
                <h1>CV</h1>
                <p>View and download my CV</p>
                <a href="/Personal_CV.pdf" download="Muhammad_Faran_Sarwar_CV.pdf">Download CV</a>
            </div>
            <div className="cv-pdf">
                {/* <a href="/Personal_CV.pdf" target="_blank" rel="noopener noreferrer">View CV</a> */}
                <embed src="/Personal_CV.pdf" type="application/pdf" />
            </div>
        </div>
    )

}

export default CV;