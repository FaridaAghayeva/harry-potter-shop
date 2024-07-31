import React from "react";
import HeadSection from "./components/HeadSection/HeadSection";
import CreateTrunk from "./components/CreateTrunk/CreateTrunk";
import CategoriesSecion from "./components/CategoriesSection/CategoriesSecion";
import NewIn from "./components/NewIn/NewIn";
export default function Home() {
  return (
    <>
      <HeadSection />
      <CategoriesSecion />
      <CreateTrunk />
      <NewIn />
    </>
  );
}
