import React, { Component } from "react";
import { Form, Col, Container, Row, Button } from "react-bootstrap";

class Order extends Component {
  state = {
    fio: "",
    email: "",
    FormCheck: true,
    address: "",
    success: true,
  };

  onRedirect = (event, path) => {
    event.preventDefault();
    this.props.history.push(path);
  };
  inputChangeHandler = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };
  
  
  render() {
    return (
      <Container>
        <Row>
          <Col xs={4}>
            <Form>
              <Form.Group className="mb-3" controlId="validationCustom01">
                <Form.Label>Ваше Имя</Form.Label>
                <Form.Control
                  type="text"
                  name="fio"
                  placeholder="Введите ваше Имя"
                  value={this.state.fio}
                  onChange={this.inputChangeHandler}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Ваш емайл</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="Введите почту"
                  value={this.state.email}
                  onChange={this.inputChangeHandler}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check
                  type="checkbox"
                  label="С доставкой"
                  value={this.state.success}
                  onChange={this.inputChangeHandler}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formGridAddress1">
                <Form.Label>Адрес</Form.Label>
                <Form.Control
                  placeholder="Ваш Адрес"
                  name="address"
                  value={this.state.address}
                  onChange={this.inputChangeHandler}
                  required
                />
              </Form.Group>

              <Button
                variant="primary"
                type="submit"
                onClick={(e) => this.onRedirect(e, "/burger")}
              >
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Order;
