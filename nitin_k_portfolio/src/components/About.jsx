"use client";
import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full blue-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-3 px-12 min-h-[150px] flex justify-evenly items-center flex-col'
      >
        <img src={icon} alt={title} className='w-16 h-16 object-contain'></img>
        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
  );

const About = () => {
  return (
    <>
    <motion.div variants={textVariant()}>
    <h2 className={styles.sectionHeadText}>Overview.</h2>
    </motion.div>
    <motion.p variants={fadeIn("", "", 0.1, 1)}
    className="mt-4 text-secondary text-justify text-[17px] leading-[30px]">
I am a software engineer dedicated to crafting cutting edge software solutions that blend technical excellence with a user centric approach. My passion for problem-solving propels me to embrace challenges, collaborate effectively with cross functional teams, and deliver high quality code.

With a solid foundation in both frontend and backend technologies, complemented by a strong design aptitude, I am committed to continuous learning, staying updated on industry trends, and contributing to the advancement of technology. If you find this intriguing, I'd be delighted to connect.
    </motion.p>
    {/* </motion.div> */}
    <div className='mt-20 flex flex-wrap gap-10'>
      {services.map((service, index) => (
        <ServiceCard key={service.title} index={index} {...service}/>
      ))}
    </div>
    </>
  );
};

export default SectionWrapper(About, "about");