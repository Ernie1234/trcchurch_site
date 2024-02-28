import VideoPlayer from "./VideoPlayer";

const Live = () => {
  return (
    <div className="py-0 px-8">
      <VideoPlayer videosrc="video url" />

      <div className="py-4 px-8">
        <h1 className="text-3xl pb-4">title</h1>
        <div>
          <span className="flex">
            <p className="font-semibold text-3xl text-gray-600 pb-3">
              preacher{" "}
            </p>
            {/* todo: uncomment after fetching the data */}
            {/* {data?.guestMinisters && (
              <p className="font-semibold text-3xl text-gray-600 pb-3">{` ft ${data?.guestMinisters}`}</p>
            )} */}
          </span>
          {/* todo: uncomment after fetching the data */}
          {/* <p className='text-xl'>{`Info: ${data?.desc}`}</p> */}
        </div>
      </div>
    </div>
  );
};

export default Live;
