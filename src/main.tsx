import React from "react";
import ReactDOM from "react-dom/client";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import App from "./App.tsx";
import "./index.css";

const client = new ApolloClient({
  uri: import.meta.env.VITE_GRAPHQL_SERVER_API,
  cache: new InMemoryCache(),
  connectToDevTools:true
});
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>
);
