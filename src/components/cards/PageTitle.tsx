import React from "react";
import { useParams } from "react-router-dom";
import useSWR from "swr";
import { CardSet } from "../../types";
import { fetcher } from "../../fetcher";

export const PageTitle = () => {
  const { setId } = useParams();
  const { data: response } = useSWR<{ data: CardSet }>(
    `/v2/sets/${setId}`,
    fetcher,
    {
      suspense: true,
    }
  );

  return <>{response!.data.name}</>;
};
