import React, { Component } from 'react';
import './App.css';
import {
  Switch,
  Route
} from 'react-router-dom';
import AMAZIOAPI from './../../api/amazioAPI';
import NavBar from './../../components/NavBar/NavBar';
import HomePage from '../HomePage/HomePage';
import CataloguePage from '../CataloguePage/CataloguePage';
import CheckoutPage from '../CheckoutPage/CheckoutPage';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      order: {},
      search: ''
    }
  }

  // Event Listeners

  updateSearch = (e) => {
    this.setState({search: e.target.value})
  }

  addProduct = (productId, orderId) => {
    AMAZIOAPI.addProductToOrder(productId, orderId)
      .then(order => {
        this.setState({order});
      });
  }

  removeProduct = (productId, orderId) => {
    AMAZIOAPI.removeProductFromOrder(productId, orderId)
      .then(order => {
        this.setState({order});
      });
  }

  // Lifecycle methods
  componentDidMount() {
    AMAZIOAPI.fetchProductsAndOrder().then(data => {
      this.setState({products: data[0], order: data[1]});
    });
  }

  render() {
    return (
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path="/" render={() =>
            <HomePage />
            }
          />
          <Route exact path="/catalogue" render={(props) => 
            <CataloguePage
              {...props}
              products={this.state.products}
              order={this.state.order} 
              search={this.state.search}
              updateSearch={this.updateSearch}
              addProduct={this.addProduct}
              removeProduct={this.removeProduct}
            />
            }
          />
          <Route exact path="/checkout" render={(props) => 
            <CheckoutPage 
              {...props}
              order={this.state.order}
              addProduct={this.addProduct}
              removeProduct={this.removeProduct}
            />
            }
          />
          <Route exact path="/order-confirmation" />
        </Switch>
      </div>
    );
  }
}

export default App;
