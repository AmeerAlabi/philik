import React from 'react'

const Contact = () => {
  return (
    <div className=' mx-auto p-5 w-[85%] flex justify-center gap-[20px] '>
     <h1 className=" text-[48px]  font-[600] text-black  ">Do you have questions?
     Ask us.</h1> 
     <div className=" flex flex-col gap-[15px]">
        <input type="text" placeholder='Your E-mail Adress' className=" w-[500px] h-[50px] rounded-[40px] bg-[#E2F4FF] p-5 " />
        <textarea type="text" placeholder='Type your Message' className=" w-[500px] h-[230px]  justify-start items-start flex rounded-[40px] bg-[#E2F4FF] p-5 " />
     </div>
    </div>
  )
}

export default Contact
