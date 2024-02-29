import { useNavigate } from "react-router-dom";
import { Button1 } from ".";

const Banner = () => {
  const navigate = useNavigate();

  const handleBtnClick = () => {
    navigate("/program");
  };

  return (
    <div className="relative h-[65vh] md:h-[90vh] w-full">
      <div className="absolute top-0 left-0 z-10 h-full w-full opacity-100 overflow-hidden">
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

      <div className="w-full h-full bg-gray-900/90 z-20 absolute flex justify-center items-center">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-white uppercase text-center mb-8 ">
            <span className="block font-bold text-4xl md:text-6xl lg:text-8xl  tracking-wider moveInLeft">
              Welcome to
            </span>
            <span className="block text-lg md:xl: lg:text-3xl tracking-wider font-medium moveInRight">
              the risen christ christian centre
            </span>
          </h1>
          <Button1 title="watch messages" handleFn={handleBtnClick} />
        </div>
      </div>
    </div>
  );
};

export default Banner;
