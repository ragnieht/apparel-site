import React from "react";
// import classes from "./MainItemsDisplay.module.css";
import ItemList from "./ItemList";
import classes from "./MainItemsDisplay.module.css";

export default function MainItemsDisplay(props) {
  return (
    <div className={classes.container}>
      <ItemList items={props.items} />
    </div>
  );
}
