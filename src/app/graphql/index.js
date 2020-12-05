import { ApolloClient, InMemoryCache } from 'adapters/apollo-client';

export const client = new ApolloClient({
  uri: `https://graphqlzero.almansi.me/api`,
  cache: new InMemoryCache(),
});
