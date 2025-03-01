export const CardWhy = ({ icon, text }) => {
  return (
    <div className=" md:max-w-72 lg:max-w-[410px] mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="flex flex-col items-center p-6">
        <div className="w-32 h-32 rounded-full bg-[#051d40] flex items-center justify-center mb-10">
          <p className="text-white text-[80px]">{icon}</p>
        </div>
        <p className="text-gray-700 text-center lg:text-3xl">{text}</p>
      </div>
    </div>
  );
};
