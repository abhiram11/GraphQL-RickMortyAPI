import { useCharacters } from "../hooks/useCharacters";
import { Link } from "react-router-dom";

function CharactersList() {
  const { loading, error, data } = useCharacters();

  console.log("Ch List:", loading, error, data);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    <div>Error fetching characters...</div>;
  }

  return (
    <div
      style={{
        display: "flex",
        "flex-wrap": "wrap",
        "justify-content": "space-evenly",
      }}
    >
      {data.characters.results.map((character) => (
        <Link to={`/${character.id}`}>
          <img src={character.image} alt="char img" />
          <h2>{character.name}</h2>
        </Link>
      ))}
    </div>
  );
}

export default CharactersList;
