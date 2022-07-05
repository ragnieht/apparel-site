import React from "react";
import BillingItem from "./BillingItem";
import classes from "./BillingItemList.module.css";
import { useDispatch, useSelector } from "react-redux";
import { resetCart } from "../../store/itemSlice";
export default function BillingItemList(props) {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.items.cart.items);

  function checkoutHandler() {
    dispatch(resetCart());
    if (cart.length > 0) {
      alert("You have checkout, cart have been reset!");
    } else {
      alert("No items in cart! Go add some!");
    }
  }
  function itemsInCart() {
    if (cart.length > 0) {
      return (
        <div>
          <p>Delivery & Handling</p>
          <p className={classes.price}>{deliveryFee}</p>
        </div>
      );
    } else {
      return;
    }
  }
  let deliveryFee;
  if (cart.length > 0) {
    deliveryFee = "$5";
  } else {
    deliveryFee = "";
  }
  function getTotal() {
    let temp;
    temp = props.items.items.map(
      (item) => "$" + parseFloat(item.price.replace("$", "")) * item.count
    );
    temp = temp
      .map((str) => parseFloat(str.replace("$", "")))
      .reduce((a, b) => a + b, 0);
    temp = "$" + (temp + 5);
    return temp;
  }
  function getSubTotal() {
    let temp;
    temp = props.items.items.map(
      (item) => "$" + parseFloat(item.price.replace("$", "")) * item.count
    );
    temp = temp
      .map((str) => parseFloat(str.replace("$", "")))
      .reduce((a, b) => a + b, 0);
    temp = "$" + temp;
    return temp;
  }

  return (
    <div className={classes.container}>
      <div>
        <h2>Summary</h2>
      </div>
      <div>
        {props.items.items.map((item) => (
          <BillingItem
            key={item.id}
            title={item.title}
            price={"$" + parseFloat(item.price.replace("$", "")) * item.count}
          />
        ))}
      </div>
      <div>
        <div className={classes.subtotal}>
          <p>Subtotal</p>
          <p className={classes.price}>{getSubTotal()}</p>
        </div>
        <div className={classes.delivery}>{itemsInCart()}</div>
        <span>
          ---------------------------------------------------------------------------------
        </span>
        <div className={classes.total}>
          <h3>Total</h3>
          <p className={classes.price}>{getTotal()}</p>
        </div>
      </div>
      <div className={classes.checkout}>
        <button onClick={checkoutHandler}>Checkout</button>
      </div>
    </div>
  );
}
