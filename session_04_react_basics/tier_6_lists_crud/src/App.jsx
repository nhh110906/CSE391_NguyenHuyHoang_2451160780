import ListBasics from "./ListBasics";
import CreateItem from "./CreateItem";
import DeleteItem from "./DeleteItem";
import UpdateItem from "./UpdateItem";

function App() {
  return (
    <div>
      <ListBasics />
      <hr />
      <CreateItem />
      <hr />
      <DeleteItem />
      <hr />
      <UpdateItem />
    </div>
  );
}

export default App;
