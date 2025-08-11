import InstaIcon from '../assets/icons/insta.svg';
import XIcon from '../assets/icons/x-social.svg';
import TikTokIcon from '../assets/icons/tiktok.svg';
import YoutubeIcon from '../assets/icons/youtube.svg';
export const Footer = () => {
  return (
    <footer className='py-5 bg-black text-white/60 border-t border-white/20'>
      <div className="container">
        <div className="flex flex-col gap-4 sm:flex-row sm:justify-between">
          <div className="text-center">© 2025 Samira SIHAM. All rights reserved</div>
          <ul className="flex justify-center gap-2.5">
            <li><XIcon/></li>
            <li><InstaIcon/></li>
            <li><TikTokIcon/></li>
            <li><YoutubeIcon/></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
