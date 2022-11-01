import React, {Component} from 'react';
import {Button, Col, Container, Form, Row, Table} from "react-bootstrap";
import request from "../../request";
import loader from '../../assets/images/loading-light.gif';
import Layout from "../Layout/Layout";

class Categories extends Component {
  state = {
    categoriesList: [],
    title: '',
    description: '',
    loading: false
  }

  componentDidMount() {
    request('/categories').then(res => {
      this.setState({categoriesList: res || []});
    });
  }

  inputChangeHandler = event => {
    this.setState({[event.target.name]: event.target.value});
  }

  formSubmit = event => {
    event.preventDefault();
    console.log(this.state);
  }

  render() {
    const categories = this.state.categoriesList.map(el => {
      return (
        <tr key={el.id}>
          <td>{el.title}</td>
          <td>{el.description}</td>
        </tr>
      )
    });

    return (
      <>
        <Layout {...this.props}/>
        <Container>
          <Row>
            <Col xs={6}>
              <Table bordered striped>
                <thead>
                <tr>
                  <th>Название</th>
                  <th>Описание</th>
                </tr>
                </thead>
                <tbody>
                {categories}
                </tbody>
              </Table>

              {this.state.loading ?
                <div className="loader-wrapper">
                  <img src={loader} alt=""/>
                </div>
                : null}
            </Col>

            <Col xs={6}>
              <Form onSubmit={this.formSubmit}>
                <Form.Group controlId="title" className="form-group">
                  <Form.Label>Название</Form.Label>
                  <Form.Control type="text"
                                name="title"
                                placeholder="Название"
                                value={this.state.title}
                                onChange={this.inputChangeHandler}
                                required
                  />
                </Form.Group>

                <Form.Group controlId="description" className="form-group">
                  <Form.Label>Описание</Form.Label>
                  <Form.Control type="text"
                                name="description"
                                placeholder="Описание"
                                value={this.state.description}
                                onChange={this.inputChangeHandler}
                                required
                  />
                </Form.Group>

                <Form.Group className="mb-4">
                  <Button className="form-btn"
                          type="submit"
                          variant="primary"
                          disabled={this.state.loading}
                  >
                    Создать
                  </Button>
                </Form.Group>
              </Form>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default Categories;
