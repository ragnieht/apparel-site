import React from "react";
import CheckOutItems from "./CheckOutItems";
import classes from "./CheckOutList.module.css";
export default function CheckOutList(props) {
  return (
    <div className={classes.container}>
      <div>
        <h1>Shopping Cart</h1>
      </div>
      <ul className={classes.list}>
        {props.items.items.map((item) => (
          <CheckOutItems
            key={item.id}
            id={item.id}
            title={item.title}
            price={"$" + parseFloat(item.price.replace("$", "")) * item.count}
            image={item.image}
            count={item.count}
          />
        ))}
      </ul>
    </div>
  );
}
