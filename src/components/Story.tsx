import { Heading } from ".";

export default function Story() {
  return (
    <section
      id="our story"
      className="grid grid-cols-1 md:grid-cols-2 pt-32 pb-20 px-0 gap-16"
    >
      <div className="">
        <Heading main="our story" sub="weekly gathering" />
        <p className="text-black text-xl pt-8 pl-24">
          You matter to God and you matter to us. You are of infinite worth. And
          we{`'`}re so glad you{`'`}re here. The Risen Christ Christian Centre
          is made up of real people, living real lives, making mistakes,
          experiencing joy, doing the best we can with what we have, taking our
          next steps toward Christ and helping others do the same.
        </p>
      </div>
      <div className="relative flex justify-center items-center w-full">
        <img
          width={220}
          height={220}
          alt="story"
          src="/images/story1.jpg"
          className="object-cover rounded-md shadow-md absolute z-[2] transition-all duration-300 outline-offset-1 left-0 -top-4"
          loading="lazy"
        />
        <img
          width={220}
          height={220}
          alt="story"
          src="/images/story4.jpg"
          className="object-cover rounded-md shadow-md absolute z-[2] transition-all duration-300 outline-offset-1 left-20 -top-4"
          loading="lazy"
        />
        <img
          width={220}
          height={220}
          alt="story"
          src="/images/story2.jpg"
          loading="lazy"
          className="object-cover rounded-md shadow-md absolute z-[2] transition-all duration-300 outline-offset-1 left-[15%] -top-40"
        />
      </div>
    </section>
  );
}
