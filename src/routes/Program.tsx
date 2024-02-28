import { useEffect, useState } from "react";
import { Card, Header, Heading, Live } from "../components";
import { client } from "../utils/sanityClient";
import { programQuery } from "../utils/sanityDataFetch";
import { TPrograms } from "../constants/types";

function Program() {
  const [loading, setLoading] = useState(false);
  const [programs, setPrograms] = useState<TPrograms[] | []>([]);

  useEffect(() => {
    setLoading(true);
    client.fetch(programQuery).then((data) => {
      setPrograms(data);
      setLoading(false);
    });
  }, []);

  return (
    <div>
      <Header
        sub="hello"
        main1="our"
        main2="live Programs"
        main3="and features"
        url="https://scontent-los2-1.xx.fbcdn.net/v/t39.30808-6/429658262_17891751863986364_1665409532342786712_n.jpg?stp=c0.87.1440.1440a_dst-jpg_s851x315&_nc_cat=109&ccb=1-7&_nc_sid=3d9721&_nc_eui2=AeHhVTbPzfMEE-Hq10mHfQ3bOhbTrafM3Os6FtOtp8zc64Xxk0qXZU-szcYw0s9N_-sWhDNzpyZjtniYqPWLEUqv&_nc_ohc=lYvO1Ert3I4AX9lsYpp&_nc_ht=scontent-los2-1.xx&oh=00_AfAGimHwwbGLtAvimyEpm3R-euF3ElEPla9p6bTA-t-BvQ&oe=65E459DD"
      />
      <div className="w-[70vw] mt-16 md:mt-20 lg:mt-28">
        <Heading main="Live events" sub="Our live programs and shows" />
      </div>
      <Live />

      <div className="w-[70vw] mt-16 md:mt-20 lg:mt-28">
        <Heading main="Our Programs" sub="features and events" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-content-center p-3 md:p-8 lg:p-12 ">
        {loading
          ? "Loading..."
          : programs?.map((program) => (
              <Card
                key={program.slug.current}
                title={program.title}
                desc={program.contactInfo}
                image={program.image.asset.url}
                slug={program.slug.current}
                dateTime={program.date}
                info={program.info}
                programTheme={program.theme}
              />
            ))}
      </div>
    </div>
  );
}

export default Program;
