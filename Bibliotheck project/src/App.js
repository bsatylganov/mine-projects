import "./App.css";
import React, { useState } from "react";
import BookCards from "./components/BookCards/BookCards";
import { Route, Routes } from "react-router-dom";
import { AuthContextProvider } from "./components/Context/Context";
import NavMenu from "./components/Layout/NavMenu/NavMenu";
import Login from "./components/Login/Login";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/footer";
import { Container } from "react-bootstrap";
import PersArea from "./components/PersArea/PersArea";
import AdminArea from "./components/AdminArea/AdminArea";
import Modal from "../src/components/Modal/Modal";
import FavoritePages from "../src/containers/FavoritesPage";

function App() {
  const [search, setSearch] = useState("");
  const onSearch = (e) => {
    setSearch(e.target.value);
  };

  return (
    <>
      <Container>
        <AuthContextProvider>
          <Header />
          <NavMenu onSearch={onSearch} search={search} />
          <Routes>
            <Route path="/" element={<BookCards search={search} />} />
            <Route path="/login" element={<Login />} />
            <Route path="/persarea" element={<PersArea />} />
            <Route path="/admin" element={<AdminArea />} />
            <Route path="/favpage" element={<FavoritePages />} />
          </Routes>
          <Footer />
        </AuthContextProvider>
      </Container>
      <Modal />
    </>
  );
}

export default App;
