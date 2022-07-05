import React from "react";
import classes from "./Item.module.css";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import { Button } from "@mui/material";
import { addToCart, toggleFav } from "../../store/itemSlice";
import { useDispatch, useSelector } from "react-redux";

export default function Item(props) {
  const dispatch = useDispatch();
  const checkFav = useSelector((state) =>
    state.items.fav.some((item) => item.id === props.id)
  );

  function cartHandler() {
    dispatch(addToCart(props.id));
  }
  function favHandler() {
    dispatch(toggleFav(props.id));
  }
  return (
    <div className={classes.item}>
      <div className={classes.image}>
        <img src={props.image} alt={props.title} />
      </div>
      <div className={classes.content}>
        <li>
          <h3>{props.title}</h3>
          <p>{props.price}</p>
        </li>
        <p>{props.description}</p>
      </div>
      <div className={classes.actions}>
        <Button
          variant="outlined"
          startIcon={<FavoriteBorderOutlinedIcon />}
          onClick={favHandler}
        >
          {checkFav ? "Remove from Favourites" : "To Favourites"}
        </Button>
        <Button
          variant="outlined"
          startIcon={<AddShoppingCartOutlinedIcon />}
          onClick={cartHandler}
        >
          To Cart
        </Button>
      </div>
    </div>
  );
}
