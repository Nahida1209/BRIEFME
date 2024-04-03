import React, { useState } from 'react'
import meeting from '../assets/meeting.jpg'
const Analytics = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    if (file) {
      const formData = new FormData();
      formData.append('file', file);
  
      try {
        const response = await fetch('http://127.0.0.1:5000/upload', { // Change this URL to match your Flask server
          method: 'POST',
          body: formData,
        });
  
        // Handle response from the backend if needed
        console.log('File uploaded successfully');
      } catch (error) {
        console.error('Error uploading file:', error);
      }
    } else {
      console.error('No file selected.');
    }
  };
  return (
    <div className='bg-white py-16 px-4' id="analytics">
        <div className=' max-w-[1240px] mx-auto grid md:grid-cols-2'>
            <img className='w-[500px] mx-auto my-4'src={meeting} alt="/" />
            <div className='flex flex-col justify-center'>
                <p className='text-[#45ba3c] font-bold'>MEETING SUMMARIZER</p>
                <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Upload Meeting Transcript</h1>
                <p>
                    You can either upload your meeting recordings or file transcripts to get your meetings summarized
                </p>
                <input type="file" accept=".wav" onChange={handleFileChange} />
          <button className='bg-black text-[#f7f9f7] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3' onClick={handleUpload}>UPLOAD</button>            </div>
        </div>
    </div>
  )
}

export default Analytics