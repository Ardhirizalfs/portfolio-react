import React from "react";
import './intro.css';
import bg from '../../assets/image.png';
import btnImg from '../../assets/hireme.png';
import { Link } from 'react-scroll';

const Intro = () => {
    return (
        <section id="intro">
            <div className="introContent">
             <span className="hello">Hello,</span>
             <span className="introText">I'm <span className="introName">Smith</span> <br/> Website Designer</span>
              <p className="introPara">I am a skilled pro player in FPS game like Valorant and i like creating <br />something cool with Visual Studio code iam 17 and plese be kind.</p>
            <Link><button className="btn"><img src={btnImg} alt="Hire Me" className="btnImg" />Hire Me</button></Link>
            </div>
            <img src={bg} alt="Profile" className="bg" />
        </section>
    )
}

export default Intro;