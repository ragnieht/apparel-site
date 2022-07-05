import React from "react";
import { Avatar } from "@mui/material";
import classes from "./CheckOutItems.module.css";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../../store/itemSlice";
export default function CheckOutItems(props) {
  const dispatch = useDispatch();

  function addHandler() {
    dispatch(addToCart(props.id));
  }

  function removeHandler() {
    dispatch(removeFromCart(props.id));
  }
  return (
    <div className={classes.content}>
      <div className={classes.count}>
        <h2>{props.count}</h2>
        <p>x</p>
      </div>
      <div className={classes.avatar}>
        <Avatar
          variant="rounded"
          src={props.image}
          fontSize="large"
          sx={{ width: 60, height: 70 }}
        />
      </div>
      <div className={classes.title}>{props.title}</div>
      <div className={classes.price}>{props.price}</div>
      <div className={classes.actions}>
        <button onClick={addHandler}>
          <AddIcon />
        </button>
        <button onClick={removeHandler}>
          <RemoveIcon />
        </button>
      </div>
    </div>
  );
}
