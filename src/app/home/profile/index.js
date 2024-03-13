import React from 'react';
import './profile.scss';
import progilePic from '../../../assets/images/profile-pic.jpeg'
import { IoLogoGithub } from "react-icons/io";

export default function Profile() {
    return (
        <div className='profile'>
            <div className="container">
                <section>
                    <div className="headeing">
                        <h1>Portfolio</h1>
                    </div>
                    <div className="profile-photo">
                        <div className="photho-overflow">
                            <img src={progilePic} alt="profile-pic" />
                        </div>
                    </div>
                    <div className="intro">
                        <span> </span>
                        <span> </span>
                        <span> </span>
                        <span> </span>
                        <h2 className="typing">yash babariya</h2>
                        <p>MERN Stack Developer</p>
                    </div>
                    <div className="button-cta">
                        <div className="git"><IoLogoGithub />git </div>
                    </div>
                </section>
            </div>
        </div>
    )
}
