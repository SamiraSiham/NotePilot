export const Banner = () => {
  return (
    <div className="py-3 text-center">
      <div className="py-2 bg-[linear-gradient(to_right,rgb(252,214,255,0.7),rgb(41,216,255,0.7),rgb(255,253,128,0.7),rgb(248,154,191,0.7),rgb(252,214,255,0.7))]">
        <p className="font-medium">
          <span className="hidden sm:inline">
            Introducing a completely redesigned interface — {" "}
          </span>
          <a href="#" className="underline underline-offset-4">Explore the demo</a>
        </p>
      </div>
    </div>
  );
};
