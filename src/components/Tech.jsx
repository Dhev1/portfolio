import React from "react"
import { BallCanvas } from "./canvas"
import { SectionWrapper } from "../hoc"
import { technologies } from "../constants"
import {textVariant} from '../utils/motion';
import { motion } from "framer-motion";
import {styles} from '../styles';
const Tech = () => {
  return (
    <>
    <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          What I am familiar with
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          TEch StaCk.
        </h2>
       
      </motion.div>
      
    <div className="mt-10 flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((technology)=>(
        <div className="w-28 h-28" key={technology.name}>
          <BallCanvas icon={technology.icon}/>
        </div>
      ))}
    </div>
    <p className={`${styles.sectionSubText} flex flex-row justify-center items-center gap-2 mt-10 text-center`}>
          Wanna Know a <span className="text-white">secret??</span>
          you can actually roll them..<img
            src="src\assets\360.png"
            alt="360deg"
            className=" h-8"/>
        </p>
        
    </>
  )
}

export default SectionWrapper(Tech,"");