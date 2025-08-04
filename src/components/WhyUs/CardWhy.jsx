export const CardWhy = ({ icon, text }) => {
  return (
    <div className=" md:max-w-72 lg:max-w-[410px] mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="flex flex-col items-center p-6">
        <div className="w-36 h-32 rounded-full  flex items-center justify-center mb-8 ">
          <video className="rounded-full shadow-xl"
            src={icon}
            autoPlay
            loop
            muted></video>
        </div>
        <p className="text-gray-700 text-center lg:text-3xl">{text}</p>
      </div>
    </div>
  );
};
