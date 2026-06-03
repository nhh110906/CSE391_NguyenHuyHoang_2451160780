import NumberState from "./NumberState";
import StringState from "./StringState";
import BooleanState from "./BooleanState";
import MultipleStates from "./MultipleStates";

function App() {
  return (
    <div>
      <NumberState />
      <hr />
      <StringState />
      <hr />
      <BooleanState />
      <hr />
      <MultipleStates />
    </div>
  );
}

export default App;
