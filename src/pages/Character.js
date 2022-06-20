import { useParams } from "react-router-dom";
import { useCharacter } from "../hooks/useCharacter";

function Character() {
  const { id } = useParams();

  const { data, loading, error } = useCharacter(id);

  console.log("Each character:", data, error, loading);

  if (error) return <div>Something went wrong </div>;
  if (loading) return <div>loading,,,,,,,,,,,,, </div>;

  return (
    <div>
      <img src={data.character.image} width={720} height={720} alt="chr" />
      <h1>{data.character.name}</h1>
      <p>{data.character.gender}</p>
      <div>
        {data.character.episode.map((episode) => (
          <div>
            {episode.name} - <b>{episode.episode}</b>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Character;
