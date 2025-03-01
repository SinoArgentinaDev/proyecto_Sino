import React from 'react'

export const About =  ({
    videoSrc,
    title,
    paragraph1,
    paragraph2,
    paragraph3,
  }) => {
    return (
      <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12 p-8 md:p-12 lg:p-14">
        {/* Text Section */}
        <div className="flex flex-col justify-center md:w-1/2 space-y-6 text-gray-800 mt-10">
          <p className="text-justify leading-relaxed text-lg  md:text-xl lg:text-3xl">{paragraph1}</p>
          <p className="text-justify leading-relaxed text-lg  md:text-xl lg:text-3xl">{paragraph2}</p>
          <p className="text-justify leading-relaxed text-lg  md:text-xl lg:text-3xl">{paragraph3}</p>
        </div>
  
        {/* Video Section */}
        <div className="relative w-full md:w-[44vw] h-[60vh] md:h-[75vh] lg:h-[78vh]">
          <video
            className="w-full h-full object-cover shadow-lg"
            src={videoSrc}
            autoPlay
            loop
            muted
          ></video>
        </div>
      </div>
    );
  };
