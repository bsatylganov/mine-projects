import React, {Component} from 'react';
import {Container} from "react-bootstrap";

class Layout extends Component {
  onRedirect = (event, path) => {
    event.preventDefault();
    this.props.history.push(path);
  }

  render() {
    return (
      <Container>
        <h1>Shop KB</h1>
        <div className="nav">

          <a href="/" onClick={e => this.onRedirect(e, '/products')}>
              Добавить товар
          </a>

          <a href="/" onClick={e => this.onRedirect(e, '/categories')}>
              Добавить Категорию
          </a>

        </div>
      </Container>
    );
  }
}

export default Layout;
