import ArrowWIcon from '../assets/icons/arrow-w.svg';
export const Hero = () => {
  return (
    <div className="bg-black text-white bg-[linear-gradient(to_bottom,#000,#200D42_34%,#4F21A1_65%,#5170ff_82%)] py-[72px] relative overflow-clip">
      <div className="container">
        <div className="flex items-center justify-center">
          <a href="#" className="inline-flex gap-3 border py-1 px-2 rounded-lg border-white/30">
            <span className="bg-[linear-gradient(to_left,#F87AFF,#FB93D0,#FFDD99,#CF30B2,#2FD8FE)] text-transparent bg-clip-text [-webkit-background-clip:text]">
              Version 2.0 is here
            </span>
            <span className='inline-flex items-center gap-1'>
              <ArrowWIcon />
              <span>Read more</span>
            </span>
          </a>
        </div>
        <h1 className='text-7xl font-bold tracking-tighter text-center mt-8'>Manage Grades the Smart Way</h1>
        <p className='text-center text-xl mt-8'>
          Save hours of work, reduce errors, and keep your students’
          performance data perfectly organized — all in one powerful desktop app.
        </p>
        <div className="flex gap-6 items-center justify-center mt-8">
          <button className='bg-white text-black py-3 px-5 rounded-lg font-medium'>Get for free</button>
          <button className='bg-white text-black py-3 px-5 rounded-lg font-medium'>Watch demo</button>
        </div>
      </div>
      <div className="absolute h-[375px] w-[750px] rounded-[100%] bg-black left-1/2 -translate-x-1/2 border border-primary"></div>
    </div>
  );
};
