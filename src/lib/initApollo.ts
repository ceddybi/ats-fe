import { ApolloClient, HttpLink, InMemoryCache } from "apollo-boost";
import { createPersistedQueryLink } from "apollo-link-persisted-queries";
import fetch from "isomorphic-unfetch";

let apolloClient;

const isBrowser = typeof window !== "undefined";

// Polyfill fetch() on the server (used by apollo-client)
if (!isBrowser) {
  (global as any).fetch = fetch;
}

function create({ uri, initialState }) {
  return new ApolloClient({
    connectToDevTools: isBrowser,
    ssrMode: !isBrowser,
    link: createPersistedQueryLink().concat(
      new HttpLink({
        uri,
      }),
    ),
    cache: new InMemoryCache().restore(initialState || {}),
  });
}

export default function initApollo(options) {
  // Make sure to create a new client for every server-side request so that data
  // isn't shared between connections (which would be bad)
  if (!isBrowser) {
    return create(options);
  }

  // Reuse client on the client-side
  if (!apolloClient) {
    apolloClient = create(options);
  }

  return apolloClient;
}
