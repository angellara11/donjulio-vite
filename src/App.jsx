import NavBar from "./components/NavBar";
import "./app.css";
import { ItemListContainer } from "./components/ItemListContainer";

function App() {
  return (
    <div>
      <NavBar />
      <ItemListContainer greeting="CoderHouse" />
    </div>
  );
}

export default App;
