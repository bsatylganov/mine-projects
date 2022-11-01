import React, {Component} from 'react';
import {Button, Col, Container, Form, Row, Table} from "react-bootstrap";
import request from "../../request";
import loader from '../../assets/images/loading-light.gif';
import Layout from "../Layout/Layout";

const colors = [
  {id: '1', title: 'Красный'},
  {id: '2', title: 'Зеленый'},
  {id: '3', title: 'Синий'},
  {id: '4', title: 'Фиолетовый'},
  {id: '5', title: 'Желтый'},
  {id: '6', title: 'Черный'},
  {id: '7', title: 'Белый'}
];

class Products extends Component {
  state = {
    productsList: [],
    categoriesList: [],
    article: '',
    category: '',
    title: '',
    price: 0,
    amount: 0,
    color: '1',
    delivery: true,
    image: '',
    loading: false
  };

  componentDidMount() {
    request('/categories').then(res => {
      this.setState({categoriesList: res || []});
    });
    request('/products').then(res => {
      this.setState({productsList: res || []});
    });
  }

  inputChangeHandler = event => {
    this.setState({[event.target.name]: event.target.value});
  }

  checkboxChangeHandler = event => {
    this.setState({[event.target.name]: event.target.checked});
  }

  selectFileHandler = event => {
    this.setState({[event.target.name]: event.target.files[0]});
  }

  formSubmit = event => {
    event.preventDefault();

    this.setState({loading: true});

    const data = {
      article: this.state.article,
      category: this.state.category,
      title: this.state.title,
      price: this.state.price,
      amount: this.state.amount,
      color: this.state.color,
      delivery: this.state.delivery,
      image: this.state.image
    };

    request('/products', 'POST', data).then(res => {
      this.setState({
        article: '',
        category: '',
        title: '',
        price: 0,
        amount: 0,
        color: '1',
        delivery: true,
        image: '',
        loading: false
      });

      request('/products').then(res => {
        this.setState({categoriesList: res || []});
      });
    }).catch(error => {
      this.setState({loading: false});
    });
  };

  render() {
    const products = this.state.productsList.map((el, idx) => {
      const category = this.state.categoriesList.find(e => e.id === el.category);
      const color = colors.find(e => e.id === el.color);
      return (
        <tr key={el.id}>
          <td>{el.article}</td>
          <td>{category ? category.title : 'N/A'}</td>
          <td>{el.title}</td>
          <td>{el.price}</td>
          <td>{color ? color.title : 'N/A'}</td>
          <td>{el.delivery ? 'Да' : 'Нет'}</td>
        </tr>
      )
    });

    return (
      <>
        <Layout {...this.props}/>
        <Container>
          <Row>
            <Col xs={8}>
              <Table bordered striped>
                <thead>
                <tr>
                  <th>Артикул</th>
                  <th>Категория</th>
                  <th>Название</th>
                  <th>Цена</th>
                  <th>Цвет</th>
                  <th>Доставка</th>
                </tr>
                </thead>
                <tbody>
                {products}
                </tbody>
              </Table>

              {this.state.loading ?
                <div className="loader-wrapper">
                  <img src={loader} alt=""/>
                </div>
                : null}
            </Col>

            <Col xs={4}>
              <Form onSubmit={this.formSubmit}>
                <Form.Group controlId="article" className="form-group">
                  <Form.Label>Артикул</Form.Label>
                  <Form.Control type="text"
                                name="article"
                                placeholder="Артикул"
                                value={this.state.article}
                                onChange={this.inputChangeHandler}
                                required
                  />
                </Form.Group>

                <Form.Label htmlFor="category">Категория товара</Form.Label>
                <Form.Select id="category"
                             name="category"
                             className="form-group"
                             aria-label="Категория товара"
                             value={this.state.category}
                             onChange={this.inputChangeHandler}
                             required
                >
                  <option value=''>--- Выберите категорию ---</option>
                  {this.state.categoriesList.map(el => (
                    <option key={'cat' + el.id} value={el.id}>{el.title}</option>
                  ))}
                </Form.Select>

                <Form.Group controlId="title" className="form-group">
                  <Form.Label>Название товара</Form.Label>
                  <Form.Control type="text"
                                name="title"
                                placeholder="Наименование"
                                value={this.state.title}
                                onChange={this.inputChangeHandler}
                                required
                  />
                </Form.Group>

                <Form.Group controlId="price" className="form-group">
                  <Form.Label>Розничная цена</Form.Label>
                  <Form.Control type="number"
                                name="price"
                                min={0}
                                value={this.state.price}
                                onChange={this.inputChangeHandler}
                  />
                </Form.Group>

                <Form.Group controlId="amount" className="form-group">
                  <Form.Label>Количество</Form.Label>
                  <Form.Control type="number"
                                name="amount"
                                min={0}
                                value={this.state.amount}
                                onChange={this.inputChangeHandler}
                  />
                </Form.Group>

                <Form.Group className="form-group">
                  <Form.Label className="d-block">Выберите цвет</Form.Label>
                  {colors.map(el => (
                    <Form.Check key={'color' + el.id}
                                inline
                                label={el.title}
                                name="color"
                                type="radio"
                                id={'color' + el.id}
                                checked={this.state.color === el.id}
                                value={el.id}
                                onChange={this.inputChangeHandler}
                    />
                  ))}
                </Form.Group>

                <Form.Group className="form-group">
                  <Form.Check type="switch"
                              id="delivery"
                              label="Доставка предусмотрена"
                              name="delivery"
                              checked={this.state.delivery}
                              onChange={this.checkboxChangeHandler}
                  />
                </Form.Group>

                <Form.Group className="form-group">
                  <input type="file"
                         name="image"
                         onChange={this.selectFileHandler}
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

export default Products;
