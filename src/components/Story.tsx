import { Heading } from ".";

export default function Story() {
  return (
    <section
      id="our story"
      className="grid grid-cols-1 md:grid-cols-2 pt-32 pb-32 px-0 gap-16"
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
          alt="story1"
          src="https://scontent.fabv3-2.fna.fbcdn.net/v/t39.30808-6/412275809_922965339435456_7683383515863341908_n.jpg?stp=dst-jpg_s851x315&_nc_cat=107&ccb=1-7&_nc_sid=3d9721&_nc_eui2=AeF7cYZCc4OgVBzivWXLIyZlGBVlFCSz40sYFWUUJLPjSziy5dNmaFVDqS1SgKTmXHg_abSGHQFhLV4hh9wksfpC&_nc_ohc=8JFogI8NnvoAX8J5187&_nc_zt=23&_nc_ht=scontent.fabv3-2.fna&oh=00_AfDkYwjHjWWNRwYTdc-lcPD2SIeKjSTAfBkx996a5LG0og&oe=65E330F2"
          className="object-cover w-60 h-60 rounded-md shadow-md absolute z-[2] hover:z-[6] transition-all duration-300 outline-offset-1 left-0 -top-4"
          loading="lazy"
        />
        <img
          alt="story2"
          src="https://scontent.fabv3-1.fna.fbcdn.net/v/t39.30808-6/400081290_900020588396598_6491293487128802131_n.jpg?stp=dst-jpg_s851x315&_nc_cat=108&ccb=1-7&_nc_sid=3d9721&_nc_eui2=AeGEP0cBCV-07pMeFe57NB4i8T4IEZOWV-zxPggRk5ZX7GTEFmrqcFoP769Q_jIS_SQpy1ljQPcXNSQWmxZqDf4W&_nc_ohc=9Ymy50s_KHMAX9Zh7Uj&_nc_zt=23&_nc_ht=scontent.fabv3-1.fna&oh=00_AfCyOT7vaUNnDmTJmCcPHaE292jzvMWd3X9QHWIqqBHwEQ&oe=65E27021"
          className="object-cover w-60 h-60 rounded-md shadow-md absolute z-[3] hover:z-[6] transition-all duration-300 outline-offset-1 left-52 top-4"
          loading="lazy"
        />
        <img
          alt="story3"
          src="https://scontent.fabv3-1.fna.fbcdn.net/v/t39.30808-6/399893009_900020585063265_1011192744598934027_n.jpg?stp=dst-jpg_s851x315&_nc_cat=108&ccb=1-7&_nc_sid=3d9721&_nc_eui2=AeFe0nA8eLcDzZUG5PHb8d-HA-UlSlROG5kD5SVKVE4bmelkt7oo_sOv7Gibg28qNeoQ60wkgKjD2wnASEsu4tVm&_nc_ohc=fxarmGdVex8AX9MbgQp&_nc_zt=23&_nc_ht=scontent.fabv3-1.fna&oh=00_AfCAorz9bD7evYy1lTW0MMz_mStJKXC2tA05YMfh9TERnw&oe=65E3356E"
          loading="lazy"
          className="object-cover w-60 h-60 rounded-md shadow-md absolute z-[4] hover:z-[6] transition-all duration-300 outline-offset-1 left-[18%] top-40"
        />
      </div>
    </section>
  );
}
