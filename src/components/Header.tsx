interface IHeader {
  main1: string;
  main2: string;
  main3: string;
  sub: string;
  url: string;
}

const Header = ({ main1, main2, main3 = "", sub, url }: IHeader) => {
  return (
    <header className="relative min-h-max h-[75vh] w-full">
      <div className="absolute top-0 left-0 z-[12] h-full w-full opacity-100 overflow-hidden">
        <img alt="Header" src={url} className="object-cover h-full w-full" />
      </div>
      <div className="w-full h-full bg-slate-900/85 z-[21] text-white capitalize text-center flex justify-center items-center absolute">
        <div className="">
          <h2 className="block font-semibold text-6xl tracking-wide moveInRight">
            {sub}
          </h2>
          <h2 className="text-4xl tracking-widest font-medium">
            {main1}
            <span className="text-rose-500"> {main2} </span>
            {main3}
          </h2>
        </div>
      </div>
    </header>
  );
};

export default Header;
