import React, { Suspense } from "react";
import useErrorBoundary from "use-error-boundary";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Loader } from "./components/Loader";
import { SetsPage } from "./components/sets/SetsPage";
import { CardsPage } from "./components/cards/CardsPage";
import { CardDetailsPage } from "./components/card-details/CardDetailsPage";

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
