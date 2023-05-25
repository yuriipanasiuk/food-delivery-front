import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { fetchAllOrder } from "../redux/operations";
import { HistoryList } from "../components/HistoryList/HistoryList";

const History = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllOrder());
  }, [dispatch]);
  return (
    <>
      <HistoryList />
    </>
  );
};

export default History;
