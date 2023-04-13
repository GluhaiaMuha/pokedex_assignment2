import React from 'react';
import {Link} from "react-router-dom";
import './about.css'


const About = () => {
    return (
        <div className="gradient__bg">
            <nav className="app__navbar">
                <Link to="/" style={linkStyle} >PokeDex</Link>
                <Link to="/about" style={linkStyle}>About</Link>
            </nav>

            <div className="about__container">
                <h1>Assignment 2 - PokeDex</h1>
                <p>Simple PokeDex web application built using React</p>
            </div>
            <div className="about__container__img">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1200px-International_Pok%C3%A9mon_logo.svg.png" alt="logo"/>
            </div>
        </div>
    );
};

const linkStyle = {
    marginRight: "1rem",
    fontSize:"1.5rem",
    color:"white"
}



export default About;