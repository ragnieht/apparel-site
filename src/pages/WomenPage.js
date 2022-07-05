import React from "react";
import MainItemsDisplay from "../components/Items/MainItemsDisplay";
import { useSelector } from "react-redux";
import { Breadcrumbs, Typography, Link } from "@mui/material";
export default function WomenPage() {
  const displayItems = useSelector((state) =>
    state.items.all.filter((item) => item.for === "WOMEN")
  );
  return (
    <div style={{ marginLeft: "-18rem" }}>
      <div>
        <Breadcrumbs aria-label="breadcrumb" style={{ color: "black" }}>
          <Link underline="hover" color="inherit" href="/">
            HOME
          </Link>
          <Link underline="hover" color="inherit" href="/shop-all">
            MAIN SHOP
          </Link>
          <Typography color="text.primary">WOMEN</Typography>
        </Breadcrumbs>
      </div>
      <MainItemsDisplay items={displayItems} />
    </div>
  );
}
