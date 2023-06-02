import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import Header from "../Header/Header";

const SharedLayout = () => {
  return (
    <>
      <Header />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default SharedLayout;
