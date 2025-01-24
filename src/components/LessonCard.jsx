import React from 'react'
import pic from '../Assets/Images/lessons.png'

const LessonCard = () => {
  return (
    <div className=' w-[450px] p-3 flex flex-col items-center gap-4 bg-white shadow-lg rounded-2xl border border-gray-200 hover:shadow-2xl transition-shadow duration-300'>
     <img src={pic} alt="" className="" /> 
     <div className=" flex gap-[7px] ">
        <p className=" text-[14px] text-black ">Data-Driven Decision-Making for Beginners</p>
        <button className=" bg-black w-[100px] rounded-full h-[45px] text-white cursor-not-allowed ">View</button>
     </div>
    </div>
  )
}

export default LessonCard
