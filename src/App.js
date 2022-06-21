import "./App.css";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import CharactersList from "./pages/CharactersList";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Character from "./pages/Character";
import Search from "./pages/Search";

// https://rickandmortyapi.com/graphql

const client = new ApolloClient({
  //ideally your backend
  uri: "https://rickandmortyapi.com/graphql",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <Router>
      <ApolloProvider client={client}>
        <div className="App">
          <h1>GQL!</h1>
          <Routes>
            {/* <Routes> */}
            <Route path="/" element={<CharactersList />} exact />
            <Route path="/search" element={<Search />} exact />
            <Route path="/:id" element={<Character />} />
            {/* <CharactersList /> */}
          </Routes>
        </div>
      </ApolloProvider>
    </Router>
  );
}

export default App;
