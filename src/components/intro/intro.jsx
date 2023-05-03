import React from 'react';
import './intro.css';
import { FaGithubSquare, FaLinkedin } from 'react-icons/fa';
import background1 from '../../images/background1.png';
import background2 from '../../images/background2.png';
import myphoto from '../../images/myphoto.png'
import Profileelement from '../profile-elements/profileElement';
import crown from '../../images/crown.png'
import thumbsup from '../../images/thumbsup.jpeg'
import emoji from '../../images/emoji.png'
import { Link } from 'react-scroll';

const Intro = () => {
    return (
        <div className='intro' id='home'>
            <div className='intro-left'>

                <div className='image'>
                                   {/* blur div */}
                <div className='blur' style={{ background: "rgb(255, 252, 236)", left: "-12vw", top: "-9vw" }}></div>
                <div className='blur' style={{ background: "rgb(238 210 255)", left: "-12vw", top: "calc(100px + 3vw)" }}></div>
                <div className='blur' style={{ background: "#d4f5fb", left: "calc(180px + 1vw)", top: "calc(20px - 10vw)" }}></div>
 

                    <div className="intro-image">
                    <img src={background2} alt="nothing" />
                    <img src={background1} alt="nothing" />
                    <img src={myphoto} alt="nothing" />
                    <img src={emoji} alt="nothing" />
                    </div>
                     
                      
                    <Profileelement className="subdiv" left="calc(160px + 10vw)" top="calc(-5px + 3vw)" size='calc(25px + 1.1vw)' crown={crown} text1="Web" text2="Developer" />



                    <Profileelement className="subdiv" top="calc(160px + 10vw)" left="calc(-40px - 3vw)" size='calc(30px + 1.5vw)' crown={thumbsup} text1="Best" text2="Design" />
                               </div>
            </div>
            <div className='intro-right'>
                {/* blur div */}
                <div className='blur rightblur'></div>

               
               <div className="inside-div">
               <div className='intro-name'>
                    <span>Hi! I am</span>
                    <span>Dhanush</span>
                </div>


                <div className="intro-icons">
                    <FaGithubSquare style={{background:"transparent"}} color='rgb(133, 2, 2)' size='calc(40px + 1vw)' />
                    <FaLinkedin style={{background:"transparent"}} color='rgb(133, 2, 2)' size='calc(40px + 1vw)' />
                </div>

                <div className='buttondiv'>
                <Link spy={true} to="Contact" smooth={true}>
                <button className="button intro-button">Hire me</button>
                </Link>
                </div>

               </div>

            </div>

        </div>
    )
}

export default Intro;