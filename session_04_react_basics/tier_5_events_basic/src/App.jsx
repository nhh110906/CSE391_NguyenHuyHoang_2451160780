import ClickEvents from './ClickEvents';
import InputEvents from './InputEvents';
import FormEvents from './FormEvents';
import KeyboardEvents from '../KeyboardEvents.jsx';

function App() {
  return (
    <div>
      <ClickEvents />
      <hr />
      <InputEvents />
      <hr />
      <KeyboardEvents />
      <hr />
      <FormEvents />
    </div>
  );
}

export default App;
