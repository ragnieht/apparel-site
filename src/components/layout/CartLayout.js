import Billing from "../Items/Billing";
import Checkout from "../Items/Checkout";
import classes from "./CartLayout.module.css";
export default function CartLayout(props) {
  return (
    <div className={classes.layout}>
      <ul>
        <Billing />
        <Checkout />
      </ul>
    </div>
  );
}
