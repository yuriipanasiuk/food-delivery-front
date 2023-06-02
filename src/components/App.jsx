import { Routes, Route } from "react-router-dom";
import { lazy } from "react";

import SharedLayout from "./SharedLayout/SharedLayout";
import Home from "../pages/Home";

const History = lazy(() => import("../pages/History.jsx"));
const Cart = lazy(() => import("../pages/Cart"));
const Drinks = lazy(() => import("../pages/Drinks"));

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="drinks" element={<Drinks />} />
          <Route path="cart" element={<Cart />} />
          <Route path="history" element={<History />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
