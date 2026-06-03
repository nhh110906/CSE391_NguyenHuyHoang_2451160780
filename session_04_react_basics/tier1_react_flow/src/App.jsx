import LifecycleDemo from "./LifecycleDemo";
import BadCounter from "./BadCounter";
import GoodCounter from "./GoodCounter";
import FlowDemo from "./FlowDemo";

function App() {
  return (
    <div>
      <LifecycleDemo />
      <hr />
      <BadCounter />
      <hr />
      <GoodCounter />
      <hr />
      <FlowDemo />
      <hr />
    </div>
  );
}

export default App;
