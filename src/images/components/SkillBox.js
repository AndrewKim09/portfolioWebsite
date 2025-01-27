import React, { useEffect, useState } from 'react'
import {motion} from 'motion/react'

export const SkillBox = (props) => {

    
  return (
    <motion.div 
      className="relative bg-black glow SkillBox grid grid-cols-[50px_1fr] w-[170px] h-[65px] rounded-[5000px] border-2 skillsBox items-center mx-auto z-100 justify-between px-1"
      animate={props.animate? props.animate: null}
    >
      <div className={`${props.image} w-auto h-[65%] rounded-full bg-black skillsImage`}/>
      <div className={` text-center text-white${props.title.length > 9 ? "text-md" : "text-lg"}`}>{props.title}</div>
    </motion.div>
  )
}
