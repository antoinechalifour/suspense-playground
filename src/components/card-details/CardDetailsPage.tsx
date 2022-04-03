import React, { Suspense } from "react";
import { Loader } from "../Loader";
import { Details } from "./Details";

export const CardDetailsPage = () => {
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
