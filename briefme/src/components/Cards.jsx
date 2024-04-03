import React from 'react'

const Cards = () => {
  return (
    <div id="cards" className='w-full py-[10rem] px-4 bg-[#a9eeb1]'>
<div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
    <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 bg-white'>
        <h2 className='text-2xl font-bold text-center py-8'>Audio Summarization</h2>
    <p className='text-center font-bold text-4xl'>Convert </p>
    <div className='text-center font-medium mt-4'>
        <p classname='py-2 border-b mx-8 mt-8'>
        Transforms spoken audio from meetings into concise summaries
        </p>
        
    </div>
    <button className='text-black bg-[#45ba3c] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>start here</button>
    </div>
    <div className='bg-white w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
        <h2 className='text-2xl font-bold text-center py-8'>Transcript Summarization</h2>
    <p className='text-center font-bold text-4xl'>Summarise</p>
    <div className='text-center font-medium mt-4'>
        <p classname='py-2 border-b mx-8 mt-8'>
        Analyzes meeting transcripts to distill the content into abridged summaries.
        </p>
       
    </div>
    <button className='text-black bg-[#45ba3c] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>start here</button>
    </div>
    <div className='bg-white w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
        <h2 className='text-2xl font-bold text-center py-8'>Minutes Generation</h2>
    <p className='text-center font-bold text-4xl'>Generate</p>
    <div className='text-center font-medium mt-4'>
        <p classname='py-2 border-b mx-8 mt-8'>
        Generates comprehensive meeting minutes that go beyond mere transcription.
        </p>
        
    </div>
    <button className='text-black bg-[#45ba3c] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>start here</button>
    </div>
</div>
    </div>
  )
}

export default Cards