import React, { useEffect, useState } from 'react'

export const SkillBox = (props) => {

    
  return (
    <div className="relative bg-black glow SkillBox flex w-[400px] h-[500px] flex-col border-2 skillsBox items-center mx-auto z-100">
        <h1 className="text-2xl font-bold text-white">{props.title}</h1>
        <div className={`${props.image} w-[150px] h-[150px] mt-10`}/>
        <div className="px-10 font-medium pt-14">
            {props.text}
        </div>
                
    </div>
  )
}
