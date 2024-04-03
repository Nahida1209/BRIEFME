import React from 'react';
import {ReactTyped}  from "react-typed";
import { Link } from 'react-scroll';


const Hero = () => {
  return (
    <div className='text-white'>
      <div className='max-w-[800px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
<p className='text-[#45ba3c] font-bold p-2 text-2xl'>MEETING SUMMARIZER</p>
<h1 className='md:text-7xl sm:text-6xl text 4xl font-bold md:py-6'>Get your meetings summarized in seconds</h1>
<div className='flex justify-center items-center'>
    <p className='md:text-4xl sm:text-3xl text-xl font-bold py-4'>Improve meeting</p>
    <ReactTyped strings={['efficiency','documentation','productivity']}
    className='md:text-4xl sm:text-3xl text-xl font-bold md:pl-4 pl-2'
    typeSpeed={140}
    backspeed={140}
    loop />
</div>
<p className='md:text-2xl text-xl font-bold text-gray-500'>Unlocking collaboration, one meeting at a time.</p>
      <button className='bg-[#45ba3c] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>
  <Link to="analytics" smooth={true} duration={500}>Get Started</Link>
</button>

      </div>
    </div>
  )
}

export default Hero