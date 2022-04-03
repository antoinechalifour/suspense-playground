export const fetcher = (endpoint: string) =>
  fetch(`https://api.pokemontcg.io${endpoint}`, {
    headers: { "X-Api-Key": import.meta.env.API_KEY as string },
  }).then((response) => response.json());
