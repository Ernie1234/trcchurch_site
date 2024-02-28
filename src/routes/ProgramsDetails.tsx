import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { TPrograms } from "../constants/types";
import { client, urlFor } from "../utils/sanityClient";
import { programDetails } from "../utils/sanityDataFetch";

function ProgramsDetails() {
  const { programSlug } = useParams();

  const [loading, setLoading] = useState(false);
  const [program, setProgram] = useState<TPrograms[] | []>([]);

  const fetchProgramDetails = () => {
    if (programSlug) {
      setLoading(true);
      const query = programDetails(programSlug);

      client.fetch(query).then((res) => {
        setLoading(false);
        setProgram(res);
      });
    }
  };

  useEffect(() => {
    fetchProgramDetails();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }
  if (!program) {
    return <div>No programs details found</div>;
  }

  return (
    <div>
      {program.map((item) => (
        <div key={item.slug.current} className="mx-auto w-9/12">
          <div className="w-6/12 mx-auto rounded-md md:rounded-lg lg:rounded-xl mt-12 mb-10 overflow-hidden">
            <img
              src={urlFor(item.image.asset.url).quality(100).width(250).url()}
              alt=""
              className="w-full"
            />
          </div>

          <h1 className="font-semibold text-xl md:text-3xl lg:text-6xl mb-3">
            {item?.title}
          </h1>
          <h2 className="font-semibold text-lg md:text-xl lg:text-3xl mb-3">
            {`${item.category}: ${item.theme}`}
          </h2>

          {item.guestMinister && (
            <p>
              <span className="text-gray-500">ministring: </span>
              <span className="text-gray-800 font-semibold text-lg md:text-xl lg:text-2xl">
                {item.guestMinister}
              </span>
            </p>
          )}
        </div>
      ))}
    </div>
  );
}

export default ProgramsDetails;
