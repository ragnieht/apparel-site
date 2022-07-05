import React from "react";
import MainItemsDisplay from "../components/Items/MainItemsDisplay";
import { useSelector } from "react-redux";
import { Breadcrumbs, Typography, Link } from "@mui/material";

export default function MenPage() {
  const displayItems = useSelector((state) =>
    state.items.all.filter((item) => item.for === "MEN")
  );
  return (
    <div>
      <div>
        <Breadcrumbs aria-label="breadcrumb" style={{ color: "black" }}>
          <Link underline="hover" color="inherit" href="/">
            HOME
          </Link>
          <Link underline="hover" color="inherit" href="/shop-all">
            MAIN SHOP
          </Link>
          <Typography color="text.primary">MEN</Typography>
        </Breadcrumbs>
      </div>
      <div style={{ marginLeft: "-18rem" }}>
        <MainItemsDisplay items={displayItems} />
      </div>
    </div>
  );
}
