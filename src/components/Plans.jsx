import React from 'react'
import { FaDollarSign } from 'react-icons/fa'

const Plans = () => {
  return (
   <div className=' 
    py-[1px] w-full bg-[#FDECD8] '>
    <div className=" flex p-[50px] justify-center ">
       <h1 className=" text-[40px] font-[700]  border-r-[3px] border-[red] p-5 ">Breaking Barriers with Accessible Learning</h1> 
       <div className=" flex items-center gap-[20px] ">
    {/* <div className=" flex flex-col ml-[18px]  ">
        <FaDollarSign color='#F24C3D' />
        <h2 className="  text-[#F24C3D] font-[500] mb-2">Free Starter Plan</h2>
        <p className="text-[16px] font-[500] text-[#4E4E4E] ">Gain access to foundational courses without spending a dime—no strings attached.</p>
    </div> */}
    <div className=" flex flex-col  ">
        <FaDollarSign color='#F24C3D' />
        <h2 className="  text-[#F24C3D] font-[500] mb-2">Free Starter Plan</h2>
        <p className="text-[16px] font-[500] text-[#4E4E4E] ">Gain access to foundational courses without spending a dime—no strings attached.</p>
    </div>
       </div>
    </div>
      <div className="  bg-[red] w-full ">
        <div className=" flex justify-around items-center p-5 gap-[10px] ">
        <h1 className="text-[72px] font-bold text-white text-center">
  250+ <br />
  <span className="font-normal text-[18px] text-white opacity-80">
    Universities Reached
  </span>
</h1>
        <h1 className="text-[72px] font-bold text-white text-center">
        10,000+  <br />
  <span className="font-normal text-[18px] text-white opacity-80">
  Active Users
  </span>
</h1>
        <h1 className="text-[72px] font-bold text-white text-center">
        15,000+ <br />
  <span className="font-normal text-[18px] text-white opacity-80">
  Hours of Content Delivered
  </span>
</h1>

        </div>
      </div>
    </div>
  )
}

export default Plans
