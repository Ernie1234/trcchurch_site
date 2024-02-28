interface IGalleryCard {
  image: string;
}
function GalleryCard({ image }: IGalleryCard) {
  return (
    <div className="m-2 lg:my-8 max-w-sm rounded-md md:rounded-lg lg:rounded-xl shadow-md overflow-hidden ">
      <img className=" w-full" src={image} alt="" />
    </div>
  );
}

export default GalleryCard;
