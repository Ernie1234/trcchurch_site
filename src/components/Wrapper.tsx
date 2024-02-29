interface IWraper {
  title: string;
  text: string;
  url: string;
}

const Wrapper = ({ title, text, url }: IWraper) => {
  return (
    <div className="relative min-h-max h-[55vh] md:h-[65vh] lg:h-[75vh] w-screen ">
      <div className="absolute top-0 left-0 z-10 h-full w-full opacity-15 overflow-hidden">
        <img alt="wrapper" src={url} className="object-cover w-full h-full" />
      </div>
      <div className="w-full h-full bg-slate-900/90 z-[21] text-white capitalize text-center flex justify-center items-center ">
        <div className="">
          <h2 className="block uppercase font-semibold text-3xl md:text-4xl  tracking-widest moveInLeft">
            {title}
          </h2>
          <span className="line"></span>
          <p className="w-11/12 md:w-[70vw] my-0 mx-auto block font-semibold text-2xl tracking-wider">
            {text}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Wrapper;
