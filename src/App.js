import {characters} from "./data/data";
import {Characters} from "./components/Characters";
const App = () => {
  return (
      <div>
          {characters.map((character )=>(<Characters value={character} key ={character.id}/>))}
      </div>
  );
};

export {App};