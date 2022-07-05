import React from "react";
import CartLayout from "../components/layout/CartLayout";
import { Breadcrumbs, Typography, Link } from "@mui/material";
export default function CartPage() {
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
          <Typography color="text.primary">SHOPPING CART</Typography>
        </Breadcrumbs>
      </div>
      <CartLayout />
    </div>
  );
}
