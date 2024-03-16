import React from 'react'
import './skill.scss'
import { BiLogoReact } from "react-icons/bi";
import SiVite from "../../../assets/icons/vite.svg";
import { FaNodeJs } from "react-icons/fa";
import { IoLogoElectron } from "react-icons/io5";
import { SiExpress } from "react-icons/si";
import { GrGraphQl } from "react-icons/gr"
import { SiMongodb } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaSass } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { SiMui } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";

export default function Skill() {
    return (
        <div className='skill'>
            <div className="container">
                <section>
                    <div className="heading">
                        <h2>MY Skills</h2>
                    </div>
                    <div className="skill-box">
                        <div className="box">
                            <h2>Development Skills</h2>
                            <p><BiLogoReact className='icon' style={{ color: "#66DCFB" }} />React Js</p>
                            <p><IoLogoElectron className='icon' style={{ color: "#7AABB8" }} />ElectronJs</p>
                            <p><img src={SiVite} alt="vite-logo" style={{ width: "25px" }} /> Vite + React</p>
                            <p><FaNodeJs className='icon' style={{ color: "#53A244" }} />Node Js</p>
                            <p><SiExpress className='icon' style={{ color: "#fff" }} />Express Js</p>
                            <p><GrGraphQl className='icon' style={{ color: "#DE33A6" }} />GraphQL</p>
                            <p><SiMongodb className='icon' style={{ color: "#53A244" }} />Mongo DB</p>
                        </div>
                        <div className="box">
                            <h2>Designing Skills</h2>
                            <p><FaHtml5 className='icon' style={{ color: "#DD4B25" }} />HTML</p>
                            <p><FaCss3Alt className='icon' style={{ color: "#2862E9" }} />CSS</p>
                            <p><FaSass className='icon' style={{ color: "#C76494" }} />SCSS</p>
                            <p><SiTailwindcss className='icon' style={{ color: "#36B7F0" }} />Tailwind CSS</p>
                            <p><SiMui className='icon' style={{ color: "#0280FF" }} />MUI</p>
                            <p><FaBootstrap className='icon' style={{ color: "#7811F2" }} />React Bootstrap</p>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}
