import React, { useState } from "react";
import { Page } from "../Page";
import { CardsList } from "./CardsList";
import { PageTitle } from "./PageTitle";
import { SearchCardsBox } from "./SearchCardsBox";

export const CardsPage = () => {
  const [, startTransition] = React.useTransition();
  const [queryFilter, setQueryFilter] = useState<string>("");
  const onFilterChange = (value: string) => {
    startTransition(() => {
      setQueryFilter(value);
    });
  };

  return (
    <Page>
      <Page.Header title={<PageTitle />} />

      <Page.Content>
        <SearchCardsBox onChange={onFilterChange} />
        <CardsList filter={queryFilter} />
      </Page.Content>
    </Page>
  );
};
