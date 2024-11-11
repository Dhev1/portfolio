import React from 'react'
import {Tilt} from 'react-tilt';
import { motion } from 'framer-motion';
import{styles} from '../styles';
import { services} from '../constants'
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';
const ServiceCard=({ index,title,icon})=>{
  return(
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
      variants={fadeIn("right","spring",0.5*index,0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card">
        <div
        options={{
          max:45,
          scale:1,
          speed:450
        }}
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center  flex-col"
        >
          <img src={icon} alt={title}
          className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
        </div>

      </motion.div>
    </Tilt>
  )
}
  const About = () => {
  return (
    <>
    <motion.div variants={textVariant()} >
      <p cassName={styles.sectionSubText}>Introduction</p>
      <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
      variants={fadeIn("","",0.1,1)}
      className="mt-4 text-secondary text-[17px] max-w-6xl leading-[30px]">
       Hey there! I'm Dhev, a passionate <span className='text-white'>web developer</span> with a knack for crafting dynamic and engaging digital experiences. I bring a solid foundation in <span className='text-white'>Java programming</span>, which has powered many of my projects, and I'm equally skilled in <span className='text-white'>Android app development</span> and <span className='text-white'>Unity game development</span>, where creativity meets functionality.
       My heart is in <span className='text-white'>designing</span> most of the time, and I constantly aim to create sleek, intuitive interfaces that users love.
I have a growing interest in <span className='text-white'> machine learning and data science</span>—fields I'm eager to explore further. 
When I'm not coding, you can find me on the <span className='text-white'>sports</span> field, where teamwork and discipline fuel my drive for success. I'm always eager to learn, innovate, and take on new challenges<span className='text-white'>—let's create something amazing together!</span>
        
        <div className="mt-20 flex flex-wrap gap-10">
          {services.map((service,index)=>(
            <ServiceCard key={service.title} index={index} {...service}/>
          ))}
        </div>
        </motion.p>
    
    </>
  )
}

export default SectionWrapper(About,"about")