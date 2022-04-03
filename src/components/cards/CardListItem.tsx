import { Card } from "../../types";
import React from "react";

export const CardListItem = ({ card }: { card: Card }) => (
  <li key={card.id} className="p-2">
    <img
      src={card.images.small}
      alt={card.name}
      loading="lazy"
      className="aspect-card w-full drop-shadow transition-all scale-100 hover:scale-125 opacity-90 hover:opacity-100"
    />
    <div className="mt-2 text-center">
      <span className="rounded-lg text-sm font-semibold shadow shadow-sky-100 py-1 px-4 bg-sky-50 text-sky-600 ">
        {card.name}
      </span>
    </div>
  </li>
);
