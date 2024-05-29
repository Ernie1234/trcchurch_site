import { Heading } from ".";

export default function Story() {
  return (
    <section
      id="our story"
      className="grid grid-cols-1 md:grid-cols-2 pt-10 md:pt-32 pb-32 px-0 gap-16"
    >
      <div className="">
        <Heading main="our story" sub="weekly gathering" />
        <p className="text-black text-xl pt-8 px-8 md:px-0 md:pl-20 lg:pl-24">
          You matter to God and you matter to us. You are of infinite worth. And
          we{`'`}re so glad you{`'`}re here. The Risen Christ Christian Centre
          is made up of real people, living real lives, making mistakes,
          experiencing joy, doing the best we can with what we have, taking our
          next steps toward Christ and helping others do the same.
        </p>
      </div>
      <div className="relative hidden md:flex justify-center items-center w-full">
        <img
          alt="story1"
          src="/assets/1.jpeg"
          className="object-cover w-60 h-60 rounded-md shadow-md absolute z-[2] hover:z-[6] transition-all duration-300 outline-offset-1 left-0 -top-4"
          loading="lazy"
        />
        <img
          alt="story2"
          src="/assets/2.jpg"
          className="object-cover w-60 h-60 rounded-md shadow-md absolute z-[3] hover:z-[6] transition-all duration-300 outline-offset-1 left-52 top-4"
          loading="lazy"
        />
        <img
          alt="story3"
          src="/assets/3.png"
          loading="lazy"
          className="object-cover w-60 h-60 rounded-md shadow-md absolute z-[4] hover:z-[6] transition-all duration-300 outline-offset-1 left-[18%] top-40"
        />
      </div>
    </section>
  );
}
