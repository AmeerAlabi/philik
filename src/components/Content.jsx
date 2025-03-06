import React from 'react';
import offline from '../Assets/Images/content.png'

const Content = () => {
  return (
    <div className="my-[40px] flex flex-col md:flex-row justify-center items-center gap-[20px] md:gap-[100px] p-5">
      {/* Image Section */}
      <div className="flex justify-center">
        <img
          src={off
          alt="Offline Learning"
          className="w-[300px] h-[ md:w-[600px] md
        />
      </div>
      
      {/* Text Section 
      <div className="w-full md:w-[400px] flex flex-col justify-start items-start gap-[15px] text-center md:text-left">
        <h1 className="font-bold text-[#F24C3D] text-[32px] md:text-[48px] lg:text-[64px] leading-[1.2]">
        AI-Powered Content
        </h1>
        <p className="text-[14px] md:text-[16px] font-normal text-black mt-[5px]">
        Receive tailored content suggestions and study plans based on each student’s unique needs.
        </p>
        <button className="w-[180px]  mx-auto md:mx-0 md:w-[200px] h-[45px] md:h-[50px] bg-black text-white rounded-[30px] mt-[20px]">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Content;
