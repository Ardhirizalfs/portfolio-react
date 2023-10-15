import React from "react";
import './works.css';
import portfolio1 from '../../assets/portfolio-1.png';
import portfolio2 from '../../assets/portfolio-2.png';
import portfolio3 from '../../assets/portfolio-3.png';
import portfolio4 from '../../assets/portfolio-4.png';
import portfolio5 from '../../assets/portfolio-5.png';
import portfolio6 from '../../assets/portfolio-6.png';

const Works = () => {
    return (
        <section id="works">
            <h2 className="worksTitle">My Portfolio</h2>
            <span className="worksDesc">In this tutorial we will make personal portfolio website design in React JS. This personal portfolio website or Resume website will contains the personal information, skills, work experience or portfolio, clients details and contact section with fully function contact form. This contact form will send the enquiries to your email address. This react app is so hard </span>
            <div className="worksImgs">
                <img src={portfolio1} alt="" className="worksImg" />
                <img src={portfolio2} alt="" className="worksImg" />
                <img src={portfolio3} alt="" className="worksImg" />
                <img src={portfolio4} alt="" className="worksImg" />
                <img src={portfolio5} alt="" className="worksImg" />
                <img src={portfolio6} alt="" className="worksImg" />
            </div>
            <button className="workBtn">See More</button>
        </section>
    );
}

export default Works;