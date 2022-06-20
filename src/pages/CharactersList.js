import { useCharacters } from "../hooks/useCharacters";

function CharactersList() {
  const { loading, error, data } = useCharacters();

  console.log(loading, error, data);

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
      {data.characters.map((character) => (
        <div>
          <img src={character.image} alt="char img" />
          <h2>{character.name}</h2>
        </div>
      ))}
    </div>
  );
}

export default CharactersList;
