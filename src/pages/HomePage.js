import React from "react";
import Banner from "../components/Banner/Banner";
import classes from "./HomePage.module.css";
import { Link } from "react-router-dom";
import ShoppingBasketOutlinedIcon from "@mui/icons-material/ShoppingBasketOutlined";
import { Button } from "@mui/material";

export default function HomePage() {
  return (
    <div>
      <div>
        <Banner />
      </div>
      <div className={classes.actions}>
        <Link to="/shop-all">
          <Button
            variant="outlined"
            startIcon={<ShoppingBasketOutlinedIcon fontSize="large" />}
          >
            To Shop
          </Button>
        </Link>
      </div>
    </div>
  );
}
