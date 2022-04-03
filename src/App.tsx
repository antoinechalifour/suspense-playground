import React, { Suspense } from "react";
import useErrorBoundary from "use-error-boundary";
import { BrowserRouter, Route, Routes, useParams } from "react-router-dom";
import { Loader } from "./components/Loader";
import { SetsPage } from "./components/sets/SetsPage";
import { CardsPage } from "./components/cards/CardsPage";
import useSWR from "swr";
import { fetcher } from "./fetcher";
import { Card } from "./types";

const Details = () => {
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

  console.log(response.data!.data.tcgplayer.prices);

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

const CardDetailsPage = () => {
  return (
    <section className="h-full">
      <Suspense
        fallback={
          <div className="h-full flex items-center justify-center">
            <Loader />
          </div>
        }
      >
        <Details />
      </Suspense>
    </section>
  );
};

function App() {
  const { didCatch, ErrorBoundary, error, reset } = useErrorBoundary();
  return (
    <BrowserRouter>
      <Suspense fallback={<Loader />}>
        <ErrorBoundary>
          {didCatch && (
            <div>
              <p>Oupsie! An error occured: {error.message}</p>
              <button onClick={reset}>Reset</button>
            </div>
          )}
          <Routes>
            <Route path="/" element={<SetsPage />} />
            <Route path="/sets/:setId" element={<CardsPage />}>
              <Route path=":cardId" element={<CardDetailsPage />} />
            </Route>
          </Routes>
        </ErrorBoundary>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
