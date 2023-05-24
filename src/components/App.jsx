import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import History from "../pages/History";
import SharedLayout from "./SharedLayout/SharedLayout";
import Cart from "../pages/Cart";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="cart" element={<Cart />} />
          <Route path="history" element={<History />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
