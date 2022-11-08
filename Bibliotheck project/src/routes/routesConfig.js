import BookCards from "./components/BookCards/BookCards";
import Login from "./components/Login/Login";
import Header from "./components/Header/Header";
import PersArea from "./components/PersArea/PersArea";
import AdminArea from "./components/AdminArea/AdminArea";
import FavoritePages from "../containers/FavoritesPage";

const routesConfig = [
  {
    path: "/",
    exact: true,
    component: BookCards,
  },
  {
    path: "/login",
    exact: true,
    component: Login,
  },
  {
    path: "/persa",
    exact: true,
    component: PersArea,
  },
  {
    path: "/favpage",
    exact: true,
    component: FavoritePages,
  },
  {
    path: "/admin",
    exact: true,
    component: AdminArea,
  },
];
