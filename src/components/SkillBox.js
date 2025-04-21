import React, { useEffect, useState } from 'react'
import {motion} from 'motion/react'

export const SkillBox = (props) => {

    
  return (
    <motion.div 
      className="relative bg-black glow SkillBox grid grid-cols-[30px_1fr] md:grid-cols-[50px_1fr] w-[100px] h-[60px] md:w-[170px] md:h-[65px] rounded-[5000px] border-2 skillsBox items-center mx-auto z-100 justify-between px-1"
      animate={props.animate? props.animate: null}
    >
      <div className={`${props.image} w-auto h-[65%] rounded-full bg-black skillsImage`}/>
      <div className={` text-center text-white lg:${props.title.length > 9 ? "text-md" : "text-lg"} ${props.title.length > 9 ? "text-xs" : "text-sm"}`}>{props.title}</div>
    </motion.div>
  )
}
