import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { fetchDrinks } from "../redux/operations";
import DrinksList from "../components/DrinksList/DrinksList";

const Drinks = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDrinks());
  }, [dispatch]);

  return (
    <>
      <DrinksList />
    </>
  );
};

export default Drinks;
