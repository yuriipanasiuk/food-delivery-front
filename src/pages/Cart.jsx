import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { fetchCart } from "../redux/operations";
import CartList from "../components/CartList/CartList";

const Cart = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCart());
  }, [dispatch]);

  return (
    <>
      <CartList />
    </>
  );
};

export default Cart;
