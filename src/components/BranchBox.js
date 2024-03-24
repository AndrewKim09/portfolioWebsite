import React from 'react'

export const BranchBox = (props) => {
  return (
    <div className={`${props.side} w-[100%] h-[500px] flex justify-center items-center mt-[-200px]`}>
      <div className={`absolute flex flex-col items-center ${props.side === "leftBranchBox" ? "left-20" : "right-20"}`}>
      <div className="flex flex-col LinkGenerator w-[300px] h-[400px] border-2 border-solid border-black bg-white rounded-xl shadow-lg cursor-pointer">
        <div className={`${props.image} w-[100%] h-[50%] rounded-lg mt-5`}/>
        <div className='px-2 mt-2'>{props.text}</div>
      </div>
        <div>{props.title}</div>
        </div>
      <div className={`w-[200px] h-[500px]  ${props.side === "leftBranchBox" ? "mr-[200px]" : "ml-[174px]"} ${props.side === "leftBranchBox" ? "leftBranch" : "rightBranch"}`}></div>
    </div>
  )
}
