import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { fetchGoods } from "../redux/operations";
import GoodsList from "../components/GoodsList/GoodsList";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGoods());
  }, [dispatch]);

  return (
    <>
      <GoodsList />
    </>
  );
};

export default Home;
