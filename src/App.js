import "./App.css";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import CharactersList from "./pages/CharactersList";

// https://rickandmortyapi.com/graphql

const client = new ApolloClient({
  //ideally your backend
  uri: "https://rickandmortyapi.com/graphql",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <h1>GQL!</h1>
        <CharactersList />
      </div>
    </ApolloProvider>
  );
}

export default App;
