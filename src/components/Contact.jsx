import React from 'react';

const Contact = () => {
  return (
    <div className="my-5 mx-auto px-5 w-[85%] flex flex-col md:flex-row justify-center items-center md:items-start gap-10">
      {/* Heading */}
      <h1 className="text-[36px] md:text-[48px] font-semibold text-black text-center md:text-left">
        Do you have questions? <br />
        Ask us.
      </h1>

      {/* Form */}
      <div className="flex flex-col gap-5 w-full max-w-[500px]">
        <input
          type="text"
          placeholder="Your E-mail Address"
          className="w-full h-[50px] rounded-full bg-[#E2F4FF] p-5 text-black placeholder-gray-500"
        />
        <textarea
          placeholder="Type your Message"
          className="w-full h-[230px] rounded-[40px] bg-[#E2F4FF] p-5 text-black placeholder-gray-500"
        />
      </div>
    </div>
  );
};

export default Contact;
