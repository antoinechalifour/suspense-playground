import { Link } from "react-router-dom";
import { CardSet } from "../../types";

type SetListItemProps = { set: CardSet };
export const SetListItem = ({ set }: SetListItemProps) => (
  <li
    key={set.id}
    className="flex flex-col p-4 rounded-lg transition-all scale-100 hover:scale-110 bg-transparent hover:bg-sky-50"
  >
    <img
      src={set.images.logo}
      alt={set.name}
      className="w-full aspect-video overflow-hidden object-contain object-center mb-4"
    />
    <Link to={`/sets/${set.id}`} className="text-xs text-gray-600">
      <div className="text-sky-600 font-bold">{set.series}</div>{" "}
      {set.releaseDate}
      <div className="text-base font-semibold mt-1 truncate">{set.name}</div>
    </Link>
  </li>
);
