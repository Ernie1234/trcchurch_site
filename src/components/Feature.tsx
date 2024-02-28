function Feature({ paddingTop = "pt-0" }: { paddingTop: string }) {
  return (
    <section
      id="our story"
      className={`grid grid-cols-2 px-0 shadow-sm md:shadow-md lg:shadow-lg ${paddingTop}`}
    >
      <div className="ft_bg" />
      <div className="bg-white py-8 px-[8vw] flex flex-col justify-center items-start">
        <h3 className="text-6xl capitalize italic hover:not-italic text-rose-500 leading-4 mb-12 transition-all duration-300 ">
          prayer
        </h3>
        <p className="text-xl mb-8">
          {'"'}Do not be anxious about anything, but in everything by prayer and
          pleading with thanksgiving let your requests be made known to God.
          {'"'}
        </p>
        <p className="font-semibold text-sm text-gray-400">PHILIPPIANS 4:6</p>
      </div>
    </section>
  );
}

export default Feature;
