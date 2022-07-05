import React from "react";
import { useSelector } from "react-redux";
import MainItemsDisplay from "../components/Items/MainItemsDisplay";
import { Breadcrumbs, Typography, Link } from "@mui/material";

export default function FavouritesPage() {
  const displayItems = useSelector((state) => state.items.fav);

  let content;

  if (displayItems.length > 0) {
    content = <MainItemsDisplay items={displayItems} />;
  } else {
    content = (
      <h1 style={{ marginLeft: "50rem", marginTop: "5rem" }}>
        No Favourites, go add some!
      </h1>
    );
  }

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
          <Typography color="text.primary">MY FAVOURITES</Typography>
        </Breadcrumbs>
      </div>
      <div style={{ marginLeft: "-18rem" }}>{content}</div>
    </div>
  );
}
