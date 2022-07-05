import React from "react";
import SideNavBarCheckboxType from "./SideNavBarCheckboxType";
import classes from "./SideNavBar.module.css";

export default function SideNavBar(props) {
  return (
    <div>
      <div className={classes.container}>
        <ul>
          <div>
            <SideNavBarCheckboxType />
          </div>
        </ul>
      </div>
      <main className={classes.main}>{props.children}</main>
    </div>
  );
}
