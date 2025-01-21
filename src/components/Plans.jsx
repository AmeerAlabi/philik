import React from 'react';
import { FaDollarSign } from 'react-icons/fa';

const Plans = () => {
  return (
    <div className="py-1 w-full bg-[#FDECD8]">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row p-5 md:p-10 justify-center items-center gap-5">
        <h1 className="text-[28px] md:text-[40px] font-bold border-r-0 md:border-r-4 border-red-500 md:pr-5 text-center md:text-left">
          Breaking Barriers with Accessible Learning
        </h1>
        {/* Plan Cards */}
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-20 mt-5 md:mt-0">
          <div className="flex flex-col items-center md:items-start text-center md:text-left gap-2">
            <FaDollarSign size={30} color="#F24C3D" />
            <h2 className="text-[#F24C3D] font-medium text-[20px]">Free Starter Plan</h2>
            <p className="text-[14px] md:text-[16px] font-medium text-[#4E4E4E] max-w-[300px]">
              Gain access to foundational courses without spending a dime—no strings attached.
            </p>
          </div>
          <div className="flex flex-col items-center md:items-start text-center md:text-left gap-2">
            <FaDollarSign size={30} color="#F24C3D" />
            <h2 className="text-[#F24C3D] font-medium text-[20px]">Free Starter Plan</h2>
            <p className="text-[14px] md:text-[16px] font-medium text-[#4E4E4E] max-w-[300px]">
              Gain access to foundational courses without spending a dime—no strings attached.
            </p>
          </div>
        </div>
      </div>

      {/* Statistics Section */}
      <div className="bg-red-500 w-full">
        <div className="flex flex-col md:flex-row justify-around items-center gap-10 md:gap-0 p-5">
          {/* Statistic 1 */}
          <h1 className="text-[48px] md:text-[72px] font-bold text-white text-center">
            250+ <br />
            <span className="font-normal text-[14px] md:text-[18px] text-white opacity-80">
              Universities Reached
            </span>
          </h1>
          {/* Statistic 2 */}
          <h1 className="text-[48px] md:text-[72px] font-bold text-white text-center">
            10,000+ <br />
            <span className="font-normal text-[14px] md:text-[18px] text-white opacity-80">
              Active Users
            </span>
          </h1>
          {/* Statistic 3 */}
          <h1 className="text-[48px] md:text-[72px] font-bold text-white text-center">
            15,000+ <br />
            <span className="font-normal text-[14px] md:text-[18px] text-white opacity-80">
              Hours of Content Delivered
            </span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Plans;
