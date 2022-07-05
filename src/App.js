import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MenPage from "./pages/MenPage";
import WomenPage from "./pages/WomenPage";
import KidsPage from "./pages/KidsPage";
import MainShop from "./pages/MainShop";
import AdultsPage from "./pages/AdultsPage";
import CartPage from "./pages/CartPage";
import FavouritesPage from "./pages/FavouritesPage";
import SimpleContainer from "./components/layout/SimpleContainer";
import { useDispatch } from "react-redux";
import { getItemsAsync } from "./store/itemSlice";

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      getItemsAsync(
        "https://apparel-shopping-default-rtdb.asia-southeast1.firebasedatabase.app/apparels.json"
      )
    );
  }, [dispatch]);
  return (
    <Switch>
      <SimpleContainer>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/shop-men">
          <MenPage />
        </Route>
        <Route path="/shop-women">
          <WomenPage />
        </Route>
        <Route path="/shop-kids">
          <KidsPage />
        </Route>
        <Route path="/shop-all">
          <MainShop />
        </Route>
        <Route path="/shop-adults">
          <AdultsPage />
        </Route>
        <Route path="/shoppingCart">
          <CartPage />
        </Route>
        <Route path="/favourites">
          <FavouritesPage />
        </Route>
      </SimpleContainer>
    </Switch>
  );
}
