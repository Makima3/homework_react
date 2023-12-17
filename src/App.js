import {Simpson} from "./components/Simpson";
import {simpsons} from "./data/data";
function App ()  {
  return (
      <div>
          {simpsons.map ( simpson =>(<Simpson value = {simpson} key = {simpson.name}/>
              ))}
      </div>
  );
}

export {App};
