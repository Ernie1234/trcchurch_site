interface IVideo {
  videosrc: string;
}

//todo: install react video player
function VideoPlayer({ videosrc }: IVideo) {
  return (
    <div className="relative h-[35rem] md:h-[65rem] lg:h-[85rem]">
      <ReactPlayer
        width="100%"
        height="100%"
        url={videosrc}
        type="video/mp4"
        controls={true}
        light={false}
        pip={true}
      />
    </div>
  );
}

export default VideoPlayer;
