import Masonry from "react-masonry-css";
import { gallery } from "../constants/data";
import { GalleryCard } from ".";

export default function MasonryLayoutGrid() {
  const breakpointColumnsObj = {
    default: 4,
    3000: 6,
    2000: 5,
    1200: 3,
    1000: 2,
    500: 1,
  };
  return (
    <Masonry breakpointCols={breakpointColumnsObj} className="flex">
      {gallery?.map((item) => (
        <GalleryCard key={item.id} image={item.url} />
      ))}
    </Masonry>
  );
}
