import { useParams } from "react-router-dom";
import useSWR from "swr";
import { Card } from "../../types";
import { fetcher } from "../../fetcher";
import { CardListItem } from "./CardListItem";
import React, { useState } from "react";

export const CardsList = ({ filter }: { filter: string }) => {
  const params = useParams();
  const { data: response } = useSWR<{ data: Card[] }>(
    `/v2/cards?q=set.id:${params.setId}`,
    fetcher,
    { suspense: true }
  );

  const renderedCards = response!.data.filter((card) =>
    card.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <>
      <ol className="grid grid-cols-2 md:grid-cols-4 mt-8 gap-2">
        {renderedCards.map((card) => (
          <CardListItem key={card.id} card={card} />
        ))}
      </ol>
    </>
  );
};
