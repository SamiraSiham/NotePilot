import logoNavbar from '../assets/images/logo-navbar.png';
import Image from 'next/image';
import MenuIcon from '../assets/icons/menu.svg';
export const Navbar = () => {
  return (
    <div className='bg-black'>
      <div className="px-4">
        <div className='py-4 flex items-center justify-between'>
          <div className=''>
            {/* <div className='absolute w-full top-2 bottom-0'></div> */}
            <Image src={logoNavbar} alt='notepilot logo' height={70} width={70} className='relative' />
          </div>
          <div className='border border-white border-opacity-30 h-10 w-10 inline-flex justify-center items-center rounded-lg sm:hidden'>
            <MenuIcon className='text-white' />
          </div>
          <nav className='hidden sm:flex gap-6 items-center'>
            <a href="#" className='text-opacity-60 text-white hover:text-opacity-100 transition'>About</a>
            <a href="#" className='text-opacity-60 text-white hover:text-opacity-100 transition'>Features</a>
            <a href="#" className='text-opacity-60 text-white hover:text-opacity-100 transition'>Updates</a>
            <a href="#" className='text-opacity-60 text-white hover:text-opacity-100 transition'>Help</a>
            <a href="#" className='text-opacity-60 text-white hover:text-opacity-100 transition'>Customers</a>
            <button className='bg-white py-2 px-4 rounded-lg'>Get for free</button>
          </nav>
        </div>
      </div>
    </div>
  );
};
