import { useParams } from "react-router-dom";
import useSWR from "swr";
import { Card } from "../../types";
import { fetcher } from "../../fetcher";
import { CardListItem } from "./CardListItem";
import React from "react";

export const CardsList = () => {
  const params = useParams();
  const { data: response } = useSWR<{ data: Card[] }>(
    `/v2/cards?q=set.id:${params.setId}`,
    fetcher,
    { suspense: true }
  );

  return (
    <ol className="grid grid-cols-2 md:grid-cols-4 mt-8 gap-2">
      {response!.data.map((card) => (
        <CardListItem card={card} />
      ))}
    </ol>
  );
};
