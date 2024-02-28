import { useEffect, useState } from "react";
import { Banner, Card, Feature, Heading, Story } from "../components";
import { TPrograms } from "../constants/types";
import { programQuery } from "../utils/sanityDataFetch";
import { client } from "../utils/sanityClient";

function Home() {
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
    <div className="bg-gray-100">
      <Banner />
      <Story />
      <Feature paddingTop="pt-12 md:pt-28 lg:pt-36" />
      <div className="py-24 px-0">
        <Heading sub="what's happening" main="featured events" width="40vw" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-content-center p-3 md:p-8 lg:p-12 ">
          {loading
            ? "Loading..."
            : programs
                ?.slice(0, 6)
                ?.map((program) => (
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
    </div>
  );
}

export default Home;
