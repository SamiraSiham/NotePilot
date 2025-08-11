// import appScreen from "../assets/images/app-screen.png";
import dashboardScreen from '../assets/images/Notepilot-Dashboard.png';
import Image from 'next/image';
export const ProductShowcase = () => {
  return (
    <div className='bg-black text-white bg-gradient-to-b from-black to-primary py-[72px] sm:py-24'>
      <div className='container'>
        <h2 className='text-center text-5xl sm:text-6xl font-bold tracking-tighter'>See Your Grading in Action</h2>
        <div className='max-w-xl mx-auto'>
          <p className='text-xl text-center text-white/70 mt-5'>
            Explore how our desktop app makes grade management faster, clearer, and more organized.
            From entering scores to generating reports, everything is just a few clicks away.
          </p>
        </div>
        <Image src={dashboardScreen} alt="Screenshot of the dashboard" className='mt-14' />
      </div>
    </div>
  );
};
