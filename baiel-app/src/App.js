import React, {Component} from 'react';
import Products from "./components/Products/Products";
import Categories from "./components/Categories/Categories";
import {Container} from "react-bootstrap";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Layout from "./components/Layout/Layout";

class App extends Component {
  state = {
    activeTab: 1
  }

  changeTab = activeTab => {
    console.log(activeTab);
    this.setState({activeTab});
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/categories" component={Categories}/>
          <Route exact path="/products" component={Products}/>
          <Route exact path="/" component={Layout}/>
        </Switch>
      </BrowserRouter>
    )


    // return (
    //   <>
    //     <Container>
    //       <h1>Shop KB</h1>
    //       <div className="nav">
    //         <h4 className={this.state.activeTab === 1 ? 'active' : ''}
    //             onClick={() => this.changeTab(1)}
    //         >
    //           Добавить товар
    //         </h4>
    //         <h4 className={this.state.activeTab === 2 ? 'active' : ''}
    //             onClick={() => this.changeTab(2)}
    //         >
    //           Добавить Категорию
    //         </h4>
    //       </div>
    //     </Container>
    //
    //     {this.state.activeTab === 1 ? <Products/> : null}
    //     {this.state.activeTab === 2 ? <Categories/> : null}
    //   </>
    // );
  }
}

export default App;
