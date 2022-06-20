import "./App.css";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import CharactersList from "./pages/CharactersList";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Character from "./pages/Character";

// https://rickandmortyapi.com/graphql

const client = new ApolloClient({
  //ideally your backend
  uri: "https://rickandmortyapi.com/graphql",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <BrowserRouter>
      <ApolloProvider client={client}>
        <div className="App">
          <h1>GQL!</h1>
          <Routes>
            <Route strict exact path="/" component={CharactersList} />
            <Route strict exact path="/:id" component={Character} />
          </Routes>
        </div>
      </ApolloProvider>
    </BrowserRouter>
  );
}

export default App;
