import { SetsList } from "./SetsList";
import { Page } from "../Page";

export const SetsPage = () => (
  <Page>
    <Page.Header title="Extensions" />

    <Page.Content>
      <SetsList />
    </Page.Content>
  </Page>
);
