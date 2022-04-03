import React from "react";
import { Page } from "../Page";
import { CardsList } from "./CardsList";
import { PageTitle } from "./PageTitle";

export const CardsPage = () => (
  <Page>
    <Page.Header title={<PageTitle />} />

    <Page.Content>
      <CardsList />
    </Page.Content>
  </Page>
);
