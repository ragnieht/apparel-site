import React, { useEffect } from "react";
import MainItemsDisplay from "../components/Items/MainItemsDisplay";
import { useSelector } from "react-redux";
import SideNavBar from "../components/layout/SideNavBar";
import { useDispatch } from "react-redux";
import { Breadcrumbs, Typography } from "@mui/material";
import { Link } from "@mui/material";
import { filterDisplay } from "../store/itemSlice";

export default function MainShop() {
  const displayItems = useSelector((state) => state.items.display);
  const checkBox = useSelector((state) => state.items.checkBox);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(filterDisplay());
  }, [dispatch, checkBox]);

  return (
    <div>
      <Breadcrumbs aria-label="breadcrumb" style={{ color: "black" }}>
        <Link underline="hover" color="inherit" href="/">
          HOME
        </Link>
        <Typography color="text.primary">MAIN SHOP</Typography>
      </Breadcrumbs>
      <SideNavBar />
      <MainItemsDisplay items={displayItems} />
    </div>
  );
}

// if (
//   !checkTops &&
//   !checkBottoms &&
//   !checkShoes &&
//   !checkMen &&
//   !checkWomen &&
//   !checkKids
// ) {
//   displayItems = allItems;
// }

// const [displayItem, setDisplayItem] = useState(
//   useSelector((state) => state.items.all)
// );
// const [curChecked, setCurChecked] = useState([]);

// displayItem.filter((item) => {
//   for (let type of test) {
//     return item.type === type;
//   }
//   return false;
// });
// function updateDisplayItem() {
//   let temp;
//   temp = displayItem.filter((item) => {
//     for (let type of curChecked) {
//       return item.type === type;
//     }
//     return false;
//   });

//   console.log(curChecked, displayItem);
// }
// function topHandler(checkboxName, checked) {
//   if (checked) {
//     let temp = [...curChecked];
//     temp.push(checkboxName);
//     setCurChecked(temp);
//   } else {
//     let temp = [...curChecked];
//     temp = temp.filter((type) => type !== checkboxName);
//     setCurChecked(temp);
//   }
// }

// useEffect(() => {
//   updateDisplayItem();
// });
