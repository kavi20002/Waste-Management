import React from "react";
import RecycleItem from "./RecycleItem";
import { useAllRecycleItems } from "../pages/AllItems";

function RecycleItemContainer() {
  const { data } = useAllRecycleItems();
  const { rItems } = data;

  if (rItems.length === 0) {
    return <h1>No Items to display...</h1>;
  }
  return (
    <div className="flex flex-wrap">
      {rItems.map((item) => {
        return <RecycleItem key={item.__id} {...item} />;
      })}
    </div>
  );
}

export default RecycleItemContainer;
