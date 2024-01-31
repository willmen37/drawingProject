import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCodepen, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'



import {profilePic} from "../assets"

const About = () => {
  return (
        <section className=" max-w-4xl mx-auto p-8">
            <div className='flex flex-col items-center my-12 bg-white bg-opacity-15 rounded-md p-9'>
                <img src={profilePic} alt="profile" className="w-24 object-contain rounded-full " />
                <h1 className="mt-6 font-extrabold text-[#EF4444] text-[40px]">
                    William Mendez
                </h1>
                
                <h2 className="font-extrabold text-[#EF4444] text-[25px]">Software Engineer</h2>

                <p className="mt-4 text-[#BFDBFE] text-[25px] max-w[500] text-center nb-">
                My goal is helping all kinds of people to achieve peak connectivity and productivity by designing visually appealing web applications. These applications must be intuitive and efficient for the user.
                Truthfulness and credibility are my motto in life. When I commit to a specific task, with my family or at work, I do my best to fulfill that commitment by 100%. I am reliable and disciplined, I find tremendous joy in helping people and organizations achieve their goals.
                My hope is that your company is looking for a team member who possess the best possible balance between hard skills and soft skills like reliability and commitment in order to create lasting and successful partnerships.
                Please click on any of the links below for more information about my capabilities.
                </p>
                <div className="flex justify-center mt-5">    
                <a href="https://www.linkedin.com/in/william-mendez-m/" className="mx-3 text-[40px] w-20 "><FontAwesomeIcon icon={faLinkedin} beatFade style={{color: "#EF4444",}}/></a>
                <a href="https://github.com/willmen37" className=" text-[40px]  mx-3 w-20"><FontAwesomeIcon icon={faGithub} beatFade style={{color: "#EF4444",}}/></a>
                <a href="https://willmen37.github.io/WillMendez.github.io/#" className="mx-3 text-[40px]"><FontAwesomeIcon icon={faCodepen} beatFade style={{color: "#EF4444",}}/></a>
              </div>
            </div>
        </section>
	);
}

export default About