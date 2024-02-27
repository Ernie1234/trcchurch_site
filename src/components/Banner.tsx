import { Button1 } from ".";

const Banner = () => {
  return (
    <div className="relative h-[65vh] md:h-[90vh] w-full">
      <div className="absolute top-0 left-0 z-10 h-full w-full opacity-100 hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/assets/banner.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="w-full h-full bg-slate-950/40 z-20 absolute flex justify-center items-center">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-white uppercase text-center mb-8 ">
            <span className="block font-bold tracking-wide moveInLeft">
              Welcome to
            </span>

            <span className="block text-2xl tracking-wide font-medium moveInRight">
              the risen christ christian centre
            </span>
          </h1>
          <Button1 title="watch messages" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
