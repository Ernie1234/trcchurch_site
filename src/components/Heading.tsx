interface IHeading {
  main: string;
  sub: string;
  width?: string;
}

const Heading = ({ main, sub, width }: IHeading) => {
  return (
    <>
      {sub && (
        <p className="uppercase pl-16 md:pl-24 lg:pl-40 text-xl md:text-2xl lg:text-3xl text-red-500">
          {sub}
        </p>
      )}
      <h2 className="pl-16 md:pl-24 lg:pl-40 text-black text-4xl md:text-5xl lg:text-6xl uppercase">
        {main}
      </h2>
      <span className={`heading__line w-[${width}]`}></span>
    </>
  );
};

export default Heading;
