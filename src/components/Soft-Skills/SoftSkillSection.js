import React from 'react';
import './SoftSkillSection.css';
import softSkill_image1 from '../../images/soft-skills-ui-img/soft-skiil-img1.svg';
import right_arrow from '../../images/soft-skills-ui-img/right-arrow.svg';
import circle_right_arrow from '../../images/soft-skills-ui-img/circle-right-arrow.svg';
import equittites from '../../images/soft-skills-ui-img/eque.svg';
import before_interview from '../../images/soft-skills-ui-img/before-interview.svg';
import cold_email from '../../images/soft-skills-ui-img/cold-email.svg';
import personality from '../../images/soft-skills-ui-img/lagging-personality.svg';


import resume_review from '../../images/soft-skills-ui-img/resume-review.svg';
import linkedin from '../../images/soft-skills-ui-img/linkedin.svg';
import discord from '../../images/soft-skills-ui-img/discord.svg';
import aptitude_handbook from '../../images/soft-skills-ui-img/aptitude-handbook.svg';
import resume_idea from '../../images/soft-skills-ui-img/resume-idea.svg';


function SoftSkillSection() {
  return (
    <div className='softSkillPage-main-container'>
        <div className='softSkillPage-left-container'>
            <h2>Welcome Back to User</h2>
            
            {/* Left side 1st container */}
            <div className="softSkill-left-Item softSkill-left-Item1">
                <div>
                    <p>Prepare your answer for the most asked HR interview questions</p>
                    <a href="http:google.com" target='_blank' rel='noreferrer'> <span><img src={right_arrow} alt="right_arrow_img" width="15px" height="12px" /></span> Start Practicing</a>
                </div>
                <img src={softSkill_image1} alt=""  width="300px" height="100px"/>
            </div>

            {/* Left side 2nd container */}
            <div className="softSkill-left-Item softSkill-left-Item2">
                <div>
                    <h3>Learn about interview etiquettes</h3>
                    <p>Most common qtiquettes to be followed during a job interview</p>
                    <a href="http:google.com" target='_blank' rel='noreferrer'> <img src={circle_right_arrow} alt="circle_right_arrow_img" width="15px" height="12px" /> Check it Out</a>
                </div>
                <img src={equittites} alt="" width="400px" height="150px" />
            </div>

            {/* Left side 3rd container */}
            <div className="softSkill-left-Item softSkill-left-Item3">
                <div>
                    <h3>What should do before interview?</h3>
                    <p>Things to be keep in mind to be well prepared for an interview</p>
                    <a href="http:google.com" target='_blank' rel='noreferrer'> <img src={circle_right_arrow} alt="circle_right_arrow_img" width="15px" height="12px" /> Check it Out</a>
                </div>
                <img src={before_interview} alt="" width="400px" height="150px" />
            </div>


            {/* Left side 4th container */}
            <div className="softSkill-left-Item softSkill-left-Item4">
                <div>
                    <h3>Learn how to write cold emails and cover letters!</h3>
                    <p>Quick and comprehensive guide to write a write cold email and cover latters</p>
                    <a href="http:google.com" target='_blank' rel='noreferrer'> <img src={circle_right_arrow} alt="circle_right_arrow_img" width="15px" height="12px" /> Check it Out</a>
                </div>
                <img src={cold_email} alt="" width="400px" height="150px" />
            </div>

            {/* Left side 5th container */}
            <div className="softSkill-left-Item softSkill-left-Item5">
                <div>
                    <h3>Lagging in personality skills? Check this!</h3>
                    <p>Common life skills to help you in the longer run</p>
                    <a href="http:google.com" target='_blank' rel='noreferrer'> <img src={circle_right_arrow} alt="circle_right_arrow_img" width="15px" height="12px" /> Check it Out</a>
                </div>
                <img src={personality} alt=""  width="400px" height="150px"/>
            </div>

        </div>

        {/* ---------------------------------- */}
        {/* Right Side container */}
        <div className='softSkillPage-right-container'>

            {/* Right side 1st container */}
            <div className="softSkill-right-Item">
                <div>
                    <p>Get your <span>Resume</span> reviewed </p>
                    <a href="http:google.com" target='_blank' rel='noreferrer'> <span><img src={right_arrow} alt="right_arrow_img" width="15px" height="12px" /></span>Book Now</a>
                </div>
                <img src={resume_review} alt=""  width="160px" height="100px"/>
            </div>

            {/* Right side 2nd container */}
            <div className="softSkill-right-Item">
                <div>
                    <p><span>Aptitude</span> Handbook </p>
                    <a href="http:google.com" target='_blank' rel='noreferrer'> <span><img src={right_arrow} alt="right_arrow_img" width="15px" height="12px" /></span>Solve Now</a>
                </div>
                <img src={aptitude_handbook} alt=""  width="160px" height="100px"/>
            </div>

            {/* Right side 3rd container */}
            <div className="softSkill-right-Item">
                <div>
                    <p>Join our <span>Discord</span> Community </p>
                    <a href="http:google.com" target='_blank' rel='noreferrer'> <span><img src={right_arrow} alt="right_arrow_img" width="15px" height="12px" /></span>Join Now</a>
                </div>
                <img src={discord} alt=""/>
            </div>

            {/* Right side 4th container */}
            <div className="softSkill-right-Item">
                <div>
                    <p>Want to know, how an ideal Linkedin profile looks like?</p>
                    <a href="http:google.com" target='_blank' rel='noreferrer'> <span><img src={right_arrow} alt="right_arrow_img" width="15px" height="12px" /></span>Check it Now</a>
                </div>
                <img src={linkedin} alt=""/>
            </div>

            {/* Right side 5th container */}
            <div className="softSkill-right-Item">
                <div>
                    <p>No idea, about an Ideal Resume? Dont't worry </p>
                    <a href="http:google.com" target='_blank' rel='noreferrer'> <span><img src={right_arrow} alt="right_arrow_img" width="15px" height="12px" /></span>Check it Now</a>
                </div>
                <img src={resume_idea} alt="" />
            </div>

            
        </div>
      
    </div>
  )
}

export default SoftSkillSection