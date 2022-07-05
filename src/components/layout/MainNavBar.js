import React from "react";
import { Link } from "react-router-dom";
import classes from "./MainNavBar.module.css";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import { useSelector } from "react-redux";
export default function MainNavBar() {
  const cart = useSelector((state) => state.items.cart.items);
  let temp;
  temp = cart.map((item) => item.count).reduce((a, b) => a + b, 0);

  return (
    <div className={classes.header}>
      <div className={classes.logo}>
        <Link to="/">
          <h3>APPAREL</h3>
        </Link>
      </div>
      <nav>
        <ul>
          <li className={classes.menu}>
            <Link to="/shop-men">Men</Link>
            <ul className={classes.aniMenu}>
              <li>
                <Link to="/shop-men-tops">Tops</Link>
              </li>
              <li>
                <Link to="/shop-men-bottoms">Bottoms</Link>
              </li>
              <li>
                <Link to="/shop-men-shoes">Shoes</Link>
              </li>
            </ul>
          </li>
          <li className={classes.menu}>
            <Link to="/shop-women">Women</Link>
            <ul className={classes.aniMenu}>
              <li>
                <Link to="/shop-women-tops">Tops</Link>
              </li>
              <li>
                <Link to="/shop-women-bottoms">Bottoms</Link>
              </li>
              <li>
                <Link to="/shop-women-shoes">Shoes</Link>
              </li>
            </ul>
          </li>
          <li className={classes.menu}>
            <Link to="/shop-kids">Kids</Link>
            <ul className={classes.aniMenu}>
              <li>
                <Link to="/shop-kids-tops">Tops</Link>
              </li>
              <li>
                <Link to="/shop-kids-bottoms">Bottoms</Link>
              </li>
              <li>
                <Link to="/shop-kids-shoe">Shoes</Link>
              </li>
            </ul>
          </li>
          <li className={classes.shoppingCart}>
            <Link to="/shoppingCart">
              <ShoppingBagOutlinedIcon fontSize="large" />
              <span className={classes.badge}>{temp}</span>
            </Link>
          </li>
          <li className={classes.favourites}>
            <Link to="/favourites">
              <FavoriteBorderOutlinedIcon fontSize="large" />
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
