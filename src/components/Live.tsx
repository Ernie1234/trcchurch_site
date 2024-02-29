import { useEffect, useState } from "react";
import VideoPlayer from "./VideoPlayer";
import { client } from "../utils/sanityClient";
import { liveQuery } from "../utils/sanityDataFetch";
import { TLive } from "../constants/types";

const Live = () => {
  const [loading, setLoading] = useState(false);
  const [live, setLive] = useState<TLive | undefined>(undefined);

  useEffect(() => {
    setLoading(true);
    client.fetch(liveQuery).then((data) => {
      setLive(data[0]);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!live) {
    return <div>No live found</div>;
  }

  return (
    <div className="py-0 px-8">
      <VideoPlayer videosrc={live?.url} />
      <div className="w-full md:w-11/12 mx-auto p-5">
        <h1 className="font-semibold text-4xl md:text-5xl lg:text-7xl text-gray-600 pb-3">
          {live?.title}
        </h1>

        <div className="flex flex-col md:flex-row gap-1 md:gap-8">
          <p className="text-2xl md:text-3xl lg:text-4xl  ">
            {live?.programTheme}
          </p>
          <p className="text-2xl md:text-3xl lg:text-4xl">{`Info: ${live?.date}`}</p>
        </div>
      </div>
    </div>
  );
};
export default Live;

{
  /*             
            {live?.guestMinisters && (
              <p className="font-semibold text-3xl text-gray-600 pb-3">{` ft ${live?.guestMinisters}`}</p>
            )} */
}
