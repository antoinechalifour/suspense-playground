import useSWR from "swr";
import { fetcher } from "../fetcher";
import React, { Suspense, useState } from "react";
import { Card } from "../types";
import { Link } from "react-router-dom";

const SearchResults = ({ query }: { query: string }) => {
  const { data: response } = useSWR<{ data: Card[] }>(
    `/v2/cards?q=name:${query}`,
    fetcher,
    {
      suspense: true,
    }
  );

  return (
    <ol>
      {response!.data.map((card) => (
        <li key={card.id}>
          <Link to={`/sets/${card.set.id}#${card.id}`}>
            {card.name} ({card.set.name})
          </Link>
        </li>
      ))}
    </ol>
  );
};

export const SearchBox = () => {
  const [inputValue, setInputValue] = useState("");
  const query = React.useDeferredValue(inputValue);
  return (
    <form role="search">
      <label htmlFor="search">Search cards</label>
      <input
        type="text"
        id="search"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />

      {query && (
        <Suspense fallback={null}>
          <SearchResults query={query} />
        </Suspense>
      )}
    </form>
  );
};
