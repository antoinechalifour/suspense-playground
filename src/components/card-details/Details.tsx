import { useParams } from "react-router-dom";
import useSWR from "swr";
import { Card } from "../../types";
import { fetcher } from "../../fetcher";
import React from "react";

export const Details = () => {
  const { cardId } = useParams();
  const response = useSWR<{ data: Card }>(`/v2/cards/${cardId}`, fetcher, {
    suspense: true,
  });

  const details = [
    {
      name: "Artist",
      value: response.data!.data.artist,
    },
    {
      name: "Rarity",
      value: response.data!.data.rarity,
    },
  ];

  if (response.data!.data.tcgplayer.prices.normal) {
    details.push({
      name: "$ (Normal)",
      value: `$${response.data!.data.tcgplayer.prices.normal.market}`,
    });
  }

  if (response.data!.data.tcgplayer.prices.holofoil) {
    details.push({
      name: "$ (Holo)",
      value: `$${response.data!.data.tcgplayer.prices.holofoil.market}`,
    });
  }

  if (response.data!.data.tcgplayer.prices.reverseHolofoil) {
    details.push({
      name: "$ (Reverse)",
      value: `$${response.data!.data.tcgplayer.prices.reverseHolofoil.market}`,
    });
  }

  return (
    <dl>
      {details.map(({ name, value }) => (
        <React.Fragment key={name}>
          <dt className="text-xs text-sky-300">{name}</dt>
          <dd className="pl-2 mb-1 font-semibold">{value}</dd>
        </React.Fragment>
      ))}
    </dl>
  );
};
