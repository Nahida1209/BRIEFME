import React from 'react';

const Newsletter = () => {
  return (
    <div className='w-full py-16 text-white px-4'>
      <div className='max-w-[1240px] mx-auto lg:grid-cols-3'>
        <div className='lg:col-span-2 my-4'>
          <h1 className='md:text-4xl sm:-3xl text-2xl font-bold py-2'>Generate minutes of the meeting</h1>
          <p>Upload the details:</p>
          <div className="mt-4">
            <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
              <input className='p-3 flex w-[500px] rounded-md text-black' bg-white type="date" placeholder='Enter Date' />
              <input className='p-3 ml-2 flex w-[500px] rounded-md text-black' bg-white type="time" placeholder='Enter Time' />
            </div>
            <input className='p-3 flex w-[500px] rounded-md text-black mt-4' bg-white type="text" placeholder='Enter Location' />
          </div>
          <div className="mt-4">
            <h2 className='text-xl font-bold'>Attendees:</h2>
            <ul className="list-disc pl-6 mt-2">
              <li><input className='p-3 w-60 rounded-md text-black' bg-white type="text" placeholder='Name of Attendee 1' /></li>
              <li><input className='p-3 w-60 rounded-md text-black mt-2' bg-white type="text" placeholder='Name of Attendee 2' /></li>
              <li><input className='p-3 w-60 rounded-md text-black mt-2' bg-white type="text" placeholder='Name of Attendee 3' /></li>
              <li><input className='p-3 w-60 rounded-md text-black mt-2' bg-white type="text" placeholder='Name of Attendee 4' /></li>
              <li><input className='p-3 w-60 rounded-md text-black mt-2' bg-white type="text" placeholder='Name of Attendee 5' /></li>
            </ul>
          </div>
          <div className="mt-4">
            <h2 className='text-xl font-bold'>Agenda:</h2>
            <textarea className='p-3 w-[500px] rounded-md text-black mt-2 h-32' placeholder='Enter agenda here'></textarea>
          </div>
          <div className="mt-4">
            <h2 className='text-xl font-bold'>Next Meeting:</h2>
            <div className="mt-2">
              <input className='p-3 flex w-[500px] rounded-md text-black' bg-white type="date" placeholder='Insert Date' />
              <input className='p-3 mt-2 flex w-[500px] rounded-md text-black' bg-white type="time" placeholder='Insert Time' />
              <input className='p-3 flex w-[500px] rounded-md text-black mt-2' bg-white type="text" placeholder='Insert Location' />
            </div>
          </div>
          <button className='bg-[#45ba3c] text-black w-[250px] rounded-md font-medium p-3 mt-4'>Generate</button>
        </div>
        <p>We care about protection. Read <span className='text-[#45ba3c]'>Privacy Policy</span></p>
      </div>
    </div>
  );
}

export default Newsletter;
