import React from "react";
import BillingItemList from "./BillingItemList";
import classes from "./Billing.module.css";
import { useSelector } from "react-redux";

export default function Billing(props) {
  const cart = useSelector((state) => state.items.cart);

  return (
    <div className={classes.checkoutBox}>
      <BillingItemList items={cart} />
    </div>
  );
}
