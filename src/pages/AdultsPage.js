import React from "react";
import { useSelector } from "react-redux";
import MainItemsDisplay from "../components/Items/MainItemsDisplay";

export default function AdultsPage() {
  const items = useSelector((state) => state.items);
  const displayItems = items.filter(
    (item) => item.for === "MEN" || item.for === "WOMEN"
  );

  return (
    <div>
      <MainItemsDisplay items={displayItems} />
    </div>
  );
}
