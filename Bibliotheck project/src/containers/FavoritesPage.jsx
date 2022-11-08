import { useSelector } from "react-redux";
import { propTypes } from "prop-types";
// import style from "./FavoritePages.module";
import React from "react";
// import { favoriteReducer } from "../store/reducers/favoriteReducer";

const FavoritePages = () => {
  const storeDate = useSelector(state=> state.favoriteReducer);
  console.log(storeDate);
  return (
    <>
      <h1>FavoritePages</h1>
    </>
  );
};
export default FavoritePages;
