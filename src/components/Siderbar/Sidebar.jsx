import { SocialIcon } from 'react-social-icons';

export const Sidebar = () => {
  const iconStyle = {
    bgColor: 'black',
    fgColor: 'white',
    style: { width: '35px', height: '35px' }, 
  };

  const socialUrls = [
    'https://web.whatsapp.com/',
    'https://www.tiktok.com/',
    'https://www.instagram.com/',
    'https://www.facebook.com/',
  ];

  return (
    <div className="bg-blue-950 w-[90px] h-[280px] rounded-lg flex flex-col items-end gap-y-8 py-6 pr-4">
      {socialUrls.map((url, index) => (
        <SocialIcon key={index} url={url} {...iconStyle} />
      ))}
    </div>
  );
};
