export const CallToAction = () => {
  return (
    <div className="bg-black text-white py-[72px] sm:py-24 text-center">
      <div className="container max-w-xl">
        <h2 className="font-bold text-5xl tracking-tighter sm:text-6xl">Start Managing Grades Smarter — Today</h2>
        <p className="text-xl text-white/70 mt-5">
          No learning curve. No subscription headaches. Just install and start grading.
        </p>
        <form className="mt-10 flex flex-col gap-2.5 max-w-sm mx-auto sm:flex-row">
          <input type="email" name="" placeholder="your@email.com" id="" className="h-12 bg-white/20 rounded-lg px-5 py-3 font-medium placeholder:text-[#9CA3AF] flex-1"/>
          <button className="bg-white text-black h-12 rounded-lg px-5">Get Access</button>
        </form>
      </div>
    </div>
  );
};
