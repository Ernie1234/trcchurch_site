import Masonry from "react-masonry-css";
import { breakpointColumnsObj } from "../constants/data";
import { useEffect, useState } from "react";
import { galleryQuery } from "../utils/sanityDataFetch";
import { client, urlFor } from "../utils/sanityClient";
import { TGallery } from "../constants/types";

export default function MasonryLayoutGrid() {
  const [loading, setLoading] = useState(false);
  const [gallery, setGallery] = useState<TGallery[] | []>([]);

  useEffect(() => {
    setLoading(true);
    client.fetch(galleryQuery).then((data) => {
      console.log(data);
      setGallery(data);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }
  if (gallery.length < 1 || null) {
    return <div>Sorry, No image found in gallery</div>;
  }

  return (
    <Masonry breakpointCols={breakpointColumnsObj} className="flex">
      {gallery?.map((item, index) => (
        <div
          key={index}
          className="m-2 lg:my-8 max-w-sm rounded-md md:rounded-lg lg:rounded-xl shadow-md overflow-hidden "
        >
          <img
            className="w-full"
            src={urlFor(item.image.asset.url).quality(100).width(250).url()}
            alt="img"
          />
        </div>
      ))}
    </Masonry>
  );
}
