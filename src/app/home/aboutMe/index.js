import React from 'react';
import './about.scss';
import { SiPolkadot } from "react-icons/si";

export default function AboutMe() {
    return (
        <div className='about-me'>
            <div className="container">
                <section>
                    <div className="heading">
                        <h2>About me</h2>
                    </div>
                    <div className="details-heading">
                        <p><SiPolkadot className='dot-icon' />Entry-Level React-Devloper</p>
                        <p><SiPolkadot className='dot-icon' />Frontend Enthusiast</p>
                        <p><SiPolkadot className='dot-icon' />Seeking Opportunities</p>
                    </div>
                    <div className="details">
                        <p>
                            Engaging and enthusiastic React Developer with a strong foundation in frontend development, eager to contribute to innovative projects and gain practical experience. Proficient in HTML, CSS, and JavaScript, with a keen interest in React.js and its ecosystem. Passionate about creating impactful user experiences and frameworks. Possessing a dedicated attitude to learning, adaptable to new technologies and frameworks. Excited to collaborate with teams to create impactful user experiences. Seeking opportunities to kickstart a rewarding career in frontend development. Let's connect and explore how I can contribute to your team.
                        </p>
                    </div>
                </section>
            </div>
        </div>
    )
}
