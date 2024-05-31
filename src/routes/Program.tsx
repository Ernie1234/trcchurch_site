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
        url="/assets/Backgd.jpg"
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
