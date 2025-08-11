import EcosystemIcon from '../assets/icons/ecosystem.svg'
const features = [
  {
    title: "Effortless Grade Tracking",
    description:
      "Input, update, and calculate grades instantly.",
  },
  {
    title: "Customizable Reports",
    description:
      "Create detailed reports that match your grading system.",
  },
  {
    title: "Multi-Class Management",
    description:
      "Manage grades for several classes with ease.",
  },
];

export const Features = () => {
  return (
    <div className="bg-black text-white py-[72px] sm:py-24">
      <div className="container">
        <h2 className='text-center font-bold text-5xl sm:6xl tracking-tighter'>Powerful Features for Smarter Grading</h2>
        <div className='max-w-xl mx-auto'>
          <p className='text-center mt-5 text-xl text-white/70'>
            Everything you need to track, calculate, and manage student grades quickly and accurately.
          </p>
        </div>
        <div className='mt-16 flex flex-col sm:flex-row gap-4'>
          {
            features.map(({ title, description }) => (
              <div key={title} className='border border-white/30 px-5 py-10 text-center rounded-xl sm:flex-1'>
                <div className='inline-flex h-14 w-14 bg-white text-black justify-center items-center rounded-lg'>
                  <EcosystemIcon />
                </div>
                <h3 className='mt-6 font-bold'>{title}</h3>
                <p className='mt-2 text-white/70'>{description}</p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};
