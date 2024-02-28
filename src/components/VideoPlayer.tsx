import ReactPlayer from "react-player";

interface IVideo {
  videosrc: string;
}

function VideoPlayer({ videosrc }: IVideo) {
  return (
    <div className="flex w-11/12 mx-auto px-8 md:px-0">
      <ReactPlayer
        width="100%"
        height="100%"
        url={videosrc}
        type="video/mp4"
        controls={true}
        light={false}
        pip={true}
        className="shadow-lg"
      />
    </div>
  );
}

export default VideoPlayer;
