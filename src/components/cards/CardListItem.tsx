import React from "react";
import { Link, Outlet, useParams } from "react-router-dom";
import { Card } from "../../types";
import classNames from "classnames";

export const CardListItem = ({ card }: { card: Card }) => {
  const { cardId: selectedCardId } = useParams();
  const showBackface = selectedCardId === card.id;

  return (
    <li className="p-2">
      <div
        className={classNames("aspect-card relative transition-transform", {
          "rotate-y-180": showBackface,
        })}
        style={{ transformStyle: "preserve-3d" }}
      >
        <img
          src={card.images.small}
          alt={card.name}
          loading="lazy"
          className={classNames("absolute inset-0 w-full drop-shadow", {
            "transition-all scale-100 md:hover:scale-110 md:opacity-90 md:hover:opacity-100":
              !showBackface,
          })}
        />

        {showBackface && (
          <div
            className="absolute inset-0 rotate-y-180 bg-gray-800/90 text-white rounded-lg p-4 overflow-y-auto"
            style={{ backfaceVisibility: "hidden" }}
          >
            <Outlet />
          </div>
        )}
      </div>
      <div className="mt-2 text-center">
        <Link
          replace
          to={card.id}
          className="rounded-lg text-sm font-semibold shadow shadow-sky-100 py-1 px-4 bg-sky-50 text-sky-600 "
        >
          {card.name}
        </Link>
      </div>
    </li>
  );
};
