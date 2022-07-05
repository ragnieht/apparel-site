import React from "react";
import Item from "./Item";
import classes from "./ItemList.module.css";
import { Grid } from "@mui/material";
export default function ItemList(props) {
  return (
    <div className={classes.list}>
      <Grid container spacing={2}>
        {props.items.map((item) => (
          <Grid item xs={4} key={item.id}>
            <Item
              key={item.id}
              id={item.id}
              image={item.image}
              title={item.title}
              price={item.price}
              description={item.description}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
