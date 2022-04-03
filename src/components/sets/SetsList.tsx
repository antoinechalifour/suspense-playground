import useSWR from "swr";
import { fetcher } from "../../fetcher";
import { CardSet } from "../../types";
import { SetListItem } from "./SetListItem";

type Response = {
  data: CardSet[];
};

export const SetsList = () => {
  const { data: response } = useSWR<Response>(
    "/v2/sets?orderBy=-releaseDate&q=-series:other",
    fetcher,
    {
      suspense: true,
    }
  );

  return (
    <ol className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
      {response!.data.map((set) => (
        <SetListItem set={set} />
      ))}
    </ol>
  );
};
