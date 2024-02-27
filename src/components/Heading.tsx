interface IHeading {
  main: string;
  sub: string;
}

const Heading = ({ main, sub }: IHeading) => {
  return (
    <>
      {sub && <p className="uppercase pl-40 text-lg text-red-500">{sub}</p>}
      <h2 className="pl-40 text-black text-xl uppercase">{main}</h2>
      <span className="heading__line"></span>
    </>
  );
};

export default Heading;
