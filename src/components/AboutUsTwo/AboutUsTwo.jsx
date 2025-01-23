import React from 'react'

export const AboutUsTwo =( {
    videoSrc, 
    title, 
    paragraph1, 
    paragraph2, 
    paragraph3, 
  }) => {
    return (
      <div className="flex flex-col md:flex-row items-center md:items-start gap-12 p-14">
        {/* Video Section */}
        <div className="relative w-full md:w-[40vw] h-[50vh] md:h-[82vh]">
          <video
            className="w-full h-full object-cover shadow-lg ml-4"
            src={videoSrc}
            autoPlay
            loop
            muted
          ></video>
        </div>
  
        {/* Text Section */}
        <div className="flex flex-col justify-center md:w-1/2 space-y-6 text-gray-800">
          <h1 className="text-3xl font-medium text-center md:text-left tracking-wide text-[#051d40] mt-3">
            {title}
          </h1>
          <p className="text-justify leading-relaxed text-xl">{paragraph1}</p>
          <p className="text-justify leading-relaxed text-xl">{paragraph2}</p>
          <p className="text-justify leading-relaxed text-xl">{paragraph3}</p>
        </div>
      </div>
    );
}
