import React from 'react';

const Banner = () => {
  return (
    <div className='video-container' style={{ position: 'relative', width: '100%', height: '80vh' }}>
      <video id="background-video" loop autoPlay muted style={{ position: 'absolute', width: '100%', height: '80vh', left: 0, top: 0 }}>
        <source src="video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div style={{ position: 'absolute', width: '100%', height: '80vh', backgroundImage: 'linear-gradient(to bottom, rgba(0, 0, 0, .8), rgba(0, 0, 0, .9))', left: 0, top: 0 }} />

      <div className='container vid-desc flex flex-end flex-col'>
        <div className="video-title">
          <h1 className='text-start text-4xl text-white'>Expert Home Repairs and <br />  <span className='text-6xl text-orange-400'> Maintenance</span></h1>
        </div>
        <div className="video-title">
          <h5 className='text-start text-sm mt-4 text-gray-500'>Stress-Free Appliance Installation and Repair, Professional Remodeling and Renovation Services, Secure and Efficient Home Security Solutions </h5>
        </div>
        <div>
          <button className='mt-8 bg-[#F5F5F5] px-12 py-4'>Order Now</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;