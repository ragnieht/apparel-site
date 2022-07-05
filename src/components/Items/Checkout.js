import React from "react";
import CheckOutList from "./CheckOutList";
import { useSelector } from "react-redux";
import classes from "./Checkout.module.css";

export default function Checkout() {
  const cart = useSelector((state) => state.items.cart);

  return (
    <div className={classes.container}>
      <CheckOutList items={cart} />
    </div>
  );
}
