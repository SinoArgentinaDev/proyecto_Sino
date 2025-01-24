import banner_img from '../../assets/img/banner.svg';
import './banner.css';

export const Banner = () => {
    return (
        <div className='relative bg-[#051d40] w-full h-[200px] flex items-center'>
            <div className='absolute left-24 md:left-14 text-white w-3/5 md:text-center'>
                <h1 className='text-lg sm:text-xl md:text-3xl font-bold w-full'>
                    CONOCE LA GUÍA QUE HEMOS DISEÑADO PARA QUE EXPORTES DESDE CHINA FÁCIL Y SEGURO
                </h1>
                <div className="mt-4 md:mt-6 flex justify-center">
                    <a href="/servicios">
                        <button className="bg-black text-white font-medium px-6 py-2 w-[250px] rounded-md hover:bg-blue-600 transition border-2 border-blue-600">
                            Saber más
                        </button>
                    </a>
                </div>
            </div>
            <img
                src={banner_img}
                alt="banner"
                className='hidden md:block absolute right-0 object-contain clip-banner-shape'
                style={{ height: '200px' }}
            />
        </div>
    );
};
