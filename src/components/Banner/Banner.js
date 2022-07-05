import React from "react";
import classes from "./Banner.module.css";
import banner from "./banner.jpg";

export default function Banner() {
  return (
    <div className={classes.banner}>
      <img src={banner} alt="banner" />
    </div>
  );
}
