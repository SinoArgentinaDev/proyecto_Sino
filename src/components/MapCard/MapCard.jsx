import { FaMapMarkedAlt } from "react-icons/fa";
export const MapCard = ({ titulo, Icon, text, url, bgColor }) => {
  return (
    <div className="max-w-sm mx-auto border rounded-lg shadow-lg overflow-hidden bg-white relative">
      {/* Header Section */}
      <div className={`relative ${bgColor} text-white h-[290px]`}>
        <div className="p-6 flex flex-col items-center">
          <h1 className="text-center text-xl font-bold mb-4 drop-shadow-[2px_1px_0px_black]">{titulo}</h1>
          <p className="text-[100px] text-white">{Icon}</p>
        </div>
        {/* Wave Shape */}
        <div className="absolute bottom-0 w-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            className="w-full h-24"
            preserveAspectRatio="none"
          >
            <path
              fill="#ffffff"
              fillOpacity="1"
              d="M0,224L48,213.3C96,203,192,181,288,154.7C384,128,480,96,576,85.3C672,75,768,85,864,106.7C960,128,1056,160,1152,186.7C1248,213,1344,235,1392,245.3L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6 text-gray-700 pb-20">
        <p className="text-justify leading-relaxed">{text}</p>
      </div>

      {/* Image Section 
      <div className="absolute bottom-0 left-0 w-full p-4">
        <img
          className="w-full h-44 object-cover shadow-md"
          src={url}
          alt="Silhouette of people in a meeting"
        />
      </div>*/}
    </div>
  );
};
