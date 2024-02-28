import { Link } from "react-router-dom";
import { format } from "date-fns";

import { urlFor } from "../utils/sanityClient";

interface ICard {
  title: string;
  image: string;
  slug: string;
  programTheme?: string;
  desc?: string;
  info?: string;
  dateTime?: string;
}
function Card({
  title,
  image,
  slug,
  desc,
  dateTime,
  info,
  programTheme,
}: ICard) {
  return (
    <Link
      to={`/program/${slug}`}
      className="max-w-sm bg-white border border-gray-200 rounded-md md:rounded-lg lg:rounded-xl shadow overflow-hidden "
    >
      <img
        className="object-cover w-full"
        src={urlFor(image).width(250).url()}
        alt={slug}
      />
      <div className="p-4">
        <h5 className=" text-2xl font-bold tracking-tight text-gray-900 ">
          {title}
        </h5>

        <p className="text-lg font-medium text-gray-800">{programTheme}</p>
        <p className="mt-3 font-semibold text-sm text-gray-400 ">{desc}</p>
        <p>{info}</p>

        <p>
          Program starts at {dateTime && format(dateTime, "dd/MM/yyyy HH:mm a")}
        </p>
      </div>
    </Link>
  );
}

export default Card;
