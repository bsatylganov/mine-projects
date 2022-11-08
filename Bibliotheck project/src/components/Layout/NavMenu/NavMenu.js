import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import firebase from "../../../firebase";
import "./NavMenu.css";
import { signInWithGoogle } from "../../../firebase";
import React, { useState } from "react";
import { logOut } from "../../../firebase";
import { Link } from 'react-router-dom';
import { UserAuth } from '../../Context/Context';

function NavMenu(props) {
  const ref = firebase.firestore().collection("booki");
  const { user, logOut } = UserAuth();

  const handleSignOut = async () => {
    try {
      await logOut()
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <Navbar bg="light" expand="lg" className="navfix">
      <Container fluid>
        <Navbar.Brand href="/">KITEP.KB</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="/persarea"> Личный кабинет </Nav.Link>
            <Nav.Link href="#action2">Популярное</Nav.Link>
            <NavDropdown title="Жанры" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3"> Детектив </NavDropdown.Item>
              <NavDropdown.Item href="#action4">Роман</NavDropdown.Item>
              <NavDropdown.Item href="#action5">Комедии</NavDropdown.Item>
              <NavDropdown.Item href="#action5">Детские книги</NavDropdown.Item>
              <NavDropdown.Item href="#action5">Родителям</NavDropdown.Item>
              <NavDropdown.Item href="#action5">Психология</NavDropdown.Item>
              <NavDropdown.Item href="#action5">История</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form className="d-flex">
            <input type="text" placeholder="Название книги..." onChange={props.onSearch} value={props.search}></input>

            <Button variant="outline-success">Search</Button>
            {user?.displayName ? (
              <button onClick={handleSignOut}>Logout</button>
            ) : (
              <Link to="/login">Sign in</Link>
            )}
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavMenu;
