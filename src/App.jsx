import NavBar from "./components/NavBar";
import "./app.css";
import { ItemListContainer } from "./components/ItemListContainer";
import { Route, Routes } from "react-router-dom";
import { Home } from "./components/Home";
import { ItemDetailContainer } from "./components/ItemDetailContainer";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/category/:id" element={<ItemListContainer />} />
        <Route exact path="/item/:id" element={<ItemDetailContainer />} />
      </Routes>
    </>
  );
}

export default App;
