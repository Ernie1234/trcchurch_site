import { ArrowRightToLine } from "lucide-react";
import { Link } from "react-router-dom";

interface ICard {
  title: string;
  desc: string;
  image: string;
  link: string;
}
function Card({ title, desc, image, link }: ICard) {
  return (
    <Link
      to={`/program/${link}`}
      className="max-w-sm bg-white border border-gray-200 rounded-md md:rounded-lg lg:rounded-xl shadow overflow-hidden "
    >
      <img className="object-cover w-full" src={image} alt="" />
      <div className="p-4">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
          {title}
        </h5>
        <p className="mb-3 font-normal text-gray-700 ">{desc}</p>
        <span className="inline-flex gap-3 items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 ">
          View details
          <ArrowRightToLine size={18} />
        </span>
      </div>
    </Link>
  );
}

export default Card;
