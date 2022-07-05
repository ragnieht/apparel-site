import React from "react";
import classes from "./BillingItem.module.css";
export default function BillingItem(props) {
  return (
    <div>
      <div className={classes.content}>
        <p className={classes.title}>{props.title}</p>
        <p className={classes.price}>{props.price}</p>
      </div>
    </div>
  );
}
