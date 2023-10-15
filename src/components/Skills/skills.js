import React from "react";
import './skills.css';
import UIDesign from '../../assets/ui-design.png';
import WebDesign from '../../assets/website-design.png';
import AppDesign from '../../assets/app-design.png';

const Skills = () => {
    return(
        <section id='skills'>
            <span className="skillTitle">What I do</span>
            <span className="skillDesc">I am a skilled pro player in FPS game like Valorant and i like creating something cool with Visual Studio code iam 17 and plese be kind to me i just want to life i dont wannna die tired from anyting .I am a skilled pro player in FPS game . </span>
            <div className="skillBars">
                <div className="skillBar">
                <img src={UIDesign} alt="UIDesign" className="skillBarImg" />
                <div className="skillBarText">
                 <h2>UI/UX Design</h2>
                 <p>This is a demo text, I want to di something cool like u know traveling </p>
                </div>
            </div>
            <div className="skillBar">
                <img src={WebDesign} alt="WebDesign" className="skillBarImg" />
                <div className="skillBarText">
                 <h2>Web Design</h2>
                 <p>This is a demo text, I want to di something cool like u know traveling</p>
                </div>
            </div>
            <div className="skillBar">
                <img src={AppDesign} alt="AppDesign" className="skillBarImg" />
                <div className="skillBarText">
                 <h2>App Design</h2>
                 <p>This is a demo text, I want to di something cool like u know traveling</p>
                </div>
            </div>
        </div>
        </section>
    )
}

export default Skills;