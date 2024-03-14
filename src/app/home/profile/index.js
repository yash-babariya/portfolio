import React from 'react';
import './profile.scss';
import progilePic from '../../../assets/images/profile-pic.jpeg'
import icon1 from '../../../assets/icons/mongoDB.svg'
import icon2 from '../../../assets/icons/express-js.png'
import icon3 from '../../../assets/icons/react.svg'
import icon4 from '../../../assets/icons/node-js.svg'
import { IoLogoGithub } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";

export default function Profile() {
    return (
        <div className='profile'>
            <div className="container">
                <section>
                    <div className="headeing">
                        <h1>Portfolio</h1>
                    </div>
                    <div className="photos">
                        <div className="profile-photo">
                            <div className="photho-overflow">
                                <img src={progilePic} alt="profile-pic" />
                            </div>
                        </div>
                        <div className="profile-icons profile-icons1">
                            <div className="photho-overflow">
                                <img src={icon1} alt="profile-pic" />
                            </div>
                        </div>
                        <div className="profile-icons profile-icons2">
                            <div className="photho-overflow">
                                <img src={icon2} alt="profile-pic" />
                            </div>
                        </div>
                        <div className="profile-icons profile-icons3">
                            <div className="photho-overflow">
                                <img src={icon3} alt="profile-pic" />
                            </div>
                        </div>
                        <div className="profile-icons profile-icons4">
                            <div className="photho-overflow">
                                <img src={icon4} alt="profile-pic" />
                            </div>
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
                        <a href='https://github.com/yash-babariya' rel="noreferrer" target='_blank' className="cta"><IoLogoGithub /><p>GitHub</p></a>
                        <a href='https://www.linkedin.com/in/yash-babariya-a370b52a5/' rel="noreferrer" target='_blank' className="cta"><FaLinkedin /><p>Linkdin</p></a>
                    </div>
                </section>
            </div>
        </div>
    )
}
